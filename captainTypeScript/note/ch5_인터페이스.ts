// 💙ch5. 인터페이스
interface User {
  name: string;
  age: number;
  hobby?: string;
}

const user1: User = {
  name: 'wavy',
  age: 30,
  // hobby
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
logPersonsAge({ age: 100 }); // '100' { age: 100 } no error

// 인터페이스 상속
interface Info {
  name?: string; // 옵셔널 파라미터 적용
  age: number;
}
interface Developer extends Info {
  skill: string;
}
// interface Developer2 extends Info {
//   age: string; // error: 상위 타입 변경 불가
//   skill: string;
// }

// 인덱싱 타입 정의
interface Arr {
  [index: number]: string;
}
interface Obj {
  foo: string;
}
const stringArray: Arr = ['a', 'b', 'c'];
const stringArray2: string[] = ['a', 'b', 'c'];

interface NumberObject {
  [key: string]: number; // 인덱스 시그니처: 속성의 이름은 모르나 속성 타입과 속성 값을 아는 경우에 사용
}
const numberObject: NumberObject = {
  biginner: 1,
};
const level = numberObject['biginner']; // level: number

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
