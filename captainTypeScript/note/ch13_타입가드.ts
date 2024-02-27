// 💙ch13. 타입 가드
// 1. 타입 단언 사용시의 문제
function updateInput(textInput: number | string | boolean) {
  // textInput.toFixed(2) // ERROR!
  return (textInput as number).toFixed(2);
  // 타입 단언으로 에러 해결시 런타임 에러는 막지 못함
}

// 2. 타입 가드: 코드의 특정 영역에서 변수의 여러 타입 중 원치 않는 타입을 가드하는 것

// 3. 방법:
// (1) 연산자: typeof, instanceof, in
// 1) typeof: 인수의 기본 자료형을 구분
function printText(text: string | number) {
  if (typeof text === 'string') {
    text; // text: string
  }
}

// 2) instanceof: 클래스 타입을 구분할 때 객체가 특정 클래스의 인스턴스인지 확인
class Person {
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const wavy = new Person('wavy', 100);
wavy instanceof Person; // true

const sylv = { name: 'sylv', age: 30 };
sylv instanceof Person; // false
sylv instanceof Object; // true

function fetchInfoByProfile(profile: Person | string) {
  if (profile instanceof Person) {
    // profile: Person
    profile.name;
    profile.age;
  }
}

// 3) in: 객체 내에 특정 속성(length, message) 유무로 구분
const dev = {
  name: 'wavy',
  skill: 'ts',
};
'name' in dev; // true

interface Developer {
  name: string;
  skill: string;
}
interface Designer {
  name: string;
  year: number;
}
function front(worker: Developer | Designer) {
  // worker.skill // ERROR! 타입 가드 필요
  if ('skill' in worker) {
    worker; // worker: Developer
  }
}

// (2) 사용자 정의: 타입 가드 함수
// 1) is 연산자 => Boolean
function isDev(someone: Developer | Designer): someone is Developer {
  return (someone as Developer).skill !== undefined; // 타입 단언
}

// function greet(someone: Person | Developer) {
//   if ('age' in someone) {
//     someone; // someone: Person
//   } else {
//     someone; // someone: Developer
//   }
// }

function frontEnd(someone: Developer | Designer) {
  if (isDev(someone)) {
    someone.skill; // someone: Developer
  } else {
    someone.year; // someone: Designer
  }
}

// 복잡한 경우의 타입 가드 예시
interface Person {
  name: string;
  age: number;
}

interface Zombie {
  name: string;
  skill: string;
}

interface Witch {
  name: string;
  age: string;
}

function giveHug(someone: Person | Zombie | Witch) {
  // GOAL: someone이 Person인지 확인

  // 1번: 타입 가드 연산자 사용
  if ('age' in someone && typeof someone.age === 'number') {
    // someone: person
  }
  // 2번: 사용자 정의 함수 사용
  if (isPerson(someone)) {
    // someone: person
  }
}
function isPerson(someone: Person | Zombie | Witch): someone is Person {
  // 타입 가드 함수, 일반적으로 외부에 정의하여 사용
  return typeof (someone as Person).age === 'number';
}

// (3) 값으로 구분
// 1) 구별된 유니언 타입
interface Person {
  name: string;
  age: number;
  industry: 'common';
}
interface Developer {
  name: string;
  age: string;
  industry: 'tech';
}
function deter(someone: Person | Developer) {
  if (someone.industry === 'common') {
    // someone: Person
  }
}

// 2) switch문
function deter2(someone: Person | Developer) {
  switch (someone.industry) {
    case 'common':
      console.log(someone.age.toFixed(2)); // someone: Person
      break;
    case 'tech':
      console.log(someone.age.split('')); // someone: Developer
      break;
  }
}

// 3) 논리, 비교 연산자
function sayGreet(message: string | null) {
  // if (message === null) return; // message: null
  // if (message!.length >= 3) {
  //   message; // message: string
  // }
  if (message && message.length >= 3) {
    console.log(message);
  }
}
