// 💙ch12. 타입 단언: 타입을 명시적으로 지정하여 컴파일시 타입 검사 하지 않음
// 컴파일러에게 변수의 타입을 알려주는 것뿐 값은 바뀌지 않음, 즉 컴파일 에러는 없애지만 런타임 에러는 막을 수 없음
const value: any = '100'; // any 타입으로 선언된 변수
const str = <string>value; // '100' 'string' // angle-bracket 문법
const num = value as number; // '100' 'string' // as 문법

// 1. angle-bracket 문법

// 2. as 문법: 변수 선언 시점에 모든 속성을 정의하지 않고 추후 추가할 수 있어 유연함
const wavy = {};
// wavy.name = 'wavy'; // ERROR!
// wavy.age = 20; // ERROR!

interface Person {
  name: string;
  age: number;
}
const sylv = {} as Person;
sylv.name = 'sylv';
sylv.age = 20;

function getId(id) {
  // function getId(id: any): any
  return id;
}
const myId1 = getId('wavy'); // myId1: any
const myId2 = getId('wavy') as number; // myId2: number

const bar = 10 as any;

// 3. 단언 중첩
const foo = 10 as any as number; // any ⊃ number

// 4. null 아님 보장 연산자(non null assertion): `!.`
interface Books {
  shuffle: Function;
}
function shuffleBooks(books: Books | null | undefined) {
  // null 체크 로직
  // if (books === null || books === undefined) {
  //   return [];
  // }
  const result = books!.shuffle();
  return result;
}

shuffleBooks(undefined);
