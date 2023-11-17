function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(10, 20));
/*
// js
funtion sum(a, b) {
  return a + b
}
*/

// 💙ch3. 변수 함수 타입 정의
var foo: string = 'captain';
// var foo: string = 10; ERROR!

console.log(foo);

/* 데이터 타입(9)
1. string 
2. number
3. boolean
4. object
5. Array
6. tuple
7. any
8. null
9. undefined
*/

// 4. object
const developer: { name: string; level: number } = {
  name: 'wavy',
  level: 10000,
};

// 5. Array
const array1: Array<string> = ['a', 'b', 'c'];
const array2: string[] = ['a', 'b', 'c'];

const array3: Array<number> = [1, 2, 3];
const array4: number[] = [1, 2, 3];

// const array5: Array<T> = [1, 2, 3]; 제네릭 -> 10장

// 6. tuple: 특정 형태를 갖는 배열,
// 배열 길이 고정+각 요소의 타입 지정된 배열
const items: [string, number] = ['hi', 11];

// 7. any
// js의 유연함
let newFoo: any = 'abc';
newFoo = 10; // 타입 무관하게 값을 재할당

// 함수란: 프로그램 내에 캡슐화된 작은 프로그램
// 사용목적: 값을 생성하거나 부수효과를 만든다.
// 선언: 함수 표현식, 선언식, 화살표 함수
// 특징: input에 따라 output의 값이 달라진다.
// 구성 요소: 매개변수 (parameter), 인자(argument)

function sayWord(n: number): string {
  return 'word is ' + n;
}
// number는 인수 타입, string은 리턴값 타입

function sayHello(name: string): string {
  return 'name is ' + name;
}
// sayHello('wavy', 'jane') ERROR!

/* function sayFullName(first: string, last: string): string {
  return 'my fullName is ' + first + last;
} 
sayFullName('wavy');
// ERROR!
*/
function sayFullName(first: string, last?: string): string {
  return 'my fullName is ' + first + last;
}
sayFullName('wavy');
// ?: optional parameter(옵션 속성)

// 💙ch5. 인터페이스
interface User {
  name: string;
  age: number;
  hobby?: string;
}

const user1: User = {
  name: 'wavy',
  age: 30,
};
const user2: User = {
  name: 'wavy',
  age: 30,
  hobby: 'watching movie',
};

interface Person {
  name?: string; // 옵셔널 파라미터 적용
  age: number;
}
function logPersonsAge(someone: Person): Person {
  console.log(someone.age);
  return someone;
}
logPersonsAge(user1); // '30' user1
logPersonsAge({ age: 100 });

// 인터페이스 상속
interface Info {
  name?: string; // 옵셔널 파라미터 적용
  age: number;
}
interface Developer extends Info {
  skill: string;
}
class Info {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  logAge() {
    console.log(this.age);
  }
}

class Developer extends Info {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
  logDeveloperInfo() {
    this.logAge();
    console.log(this.name);
    console.log(this.skill);
  }
}

const wavy = new Developer('wavy', 30, 'typescript');
wavy.logDeveloperInfo(); // 30 'wavy' 'typescript'
const dev2 = {
  name: 'dev2',
  age: 10,
  skill: 'javascript',
};

// 인덱싱 타입 정의
interface StringArray {
  [index: number]: string;
}

const stringArray: StringArray = ['a', 'b', 'c'];
const stringArray2: string[] = ['a', 'b', 'c'];

interface NumberObject {
  [key: string]: number; // 인덱스 시그니처: 속성의 이름은 모르나 속성 타입과 속성 값을 아는 경우에 사용
}

const numberObject: NumberObject = {
  biginner: 1,
};

const level = numberObject['biginner']; // const level: number

interface IndexSignature {
  name: string;
  id: string;
  [property: string]: string;
}

const indexObject: IndexSignature = {
  name: 'wavy',
  id: '123',
  hobby: 'watching movies',
};

// 💙ch6. 연산자 사용(|, &)
// 유니언 타입(|)
function logText(text: string | number) {
  console.log(text);
}

logText('hello');
logText(123);

// typeof 또는 in 연산자로 분기 처리 = 타입 가드
interface Type1 {
  name: string;
  age: number;
}
interface Type2 {
  name: string;
  skill: string;
}

function introduce(someone: Type1 | Type2) {
  if ('age' in someone) {
    console.log(someone.age); // (parameter) someone: Type1
    return;
  }
  if ('skill' in someone) {
    console.log(someone.skill); // (parameter) someone: Type2
    return;
  }
}

function logText2(text: string | number) {
  console.log(text.valueOf()); // .valueOf(): string | number
}

// 인터섹션 타입(&)
interface Avenger {
  name: string;
}

interface Hero {
  skill: string;
}

function introduce2(someone: Type1 & Type2) {
  console.log(someone.name);
  console.log(someone.skill);
}
/* 
{
  name: string;
  age: number;
  skill: string;
}
 */
introduce2({ name: '캡틴', age: 123, skill: '어셈블' });
// introduce2({ name: '캡틴' }); // ERROR!

// 💙ch7. 타입 별칭

// 💙ch8. 이넘

// 💙ch9. 클래스

// 💙ch10. 제네릭
