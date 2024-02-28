// 💙ch14. 타입 호환
// 1. 정의: 서로 다른 타입들 간의 포함 관계, 구조적 타이핑에 의해 결정됨
// * 구조적 타이핑: 타입 유형보다 타입의 구조로 호환 여부를 판별하는 특성
let a: string = 'hello';
let b: number = 10;
// a = b // ERROR!

let c: string = 'hello';
let d: 'hello' | 'hi' = 'hi';
// d = c // ERROR!
// string ⊃ 'hello' | 'hi'
c = d; // c = 'hi'

interface Ironman {
  name: string;
}
class Avengers {
  name: string;
}
let i: Ironman;
i = new Avengers(); // OK!

// 2. 객체 타입의 호환: 속성 키-타입이 호환되는 경우
type Person = {
  name: string;
};
interface Dev {
  name: string;
  skill: string;
}
var wavy: Person = {
  name: 'wavy',
};
var silv: Dev = {
  name: 'silv',
  skill: 'ts',
};
// silv = wavy // ERROR!
wavy = silv; // Dev ⊃ Person: 구조적 타이핑

interface Dev2 {
  name: string;
  skill?: string; // 옵셔널 속성으로 바꾸면 에러 발생하지 않음
}
var silv2: Dev2 = {
  name: 'silv',
  skill: 'ts',
};
silv2 = wavy;
wavy = silv;

// 3. 함수 타입의 호환: 파라미터 개수, 타입과 반환값 타입이 호환되는 경우
var add = function (a: number, b: number) {
  return a + b;
};
var sum = function (x: number, y: number) {
  return x;
};
add = sum;
sum = add;

var num = function (v: number) {
  return v;
};
// num = add; // ERROR!
add = num; // add 파라미터 ⊃ num 파라미터

// 4. 이넘 타입의 호환: 숫자형 이넘과 숫자 타입은 호환
enum Language {
  C, // 0
  Java, // 1
  TypeScript, // 2
}
var foo: number;
foo = Language.C; // 0
foo = 10;

// * 구조가 같아도 이넘끼리는 호환 불가
enum Programming {
  C,
  Java,
  TypeScript,
}

var langC: Language.C; // 0
// langC = Programming.C; // ERROR!

// 5. 제네릭 타입의 호환: 받은 타입의 사용 여부에 따라 호환 여부 구분
// 제네릭으로 받은 타입이 사용되지 않는다면 타입 호환에 영향 없음
interface Empty<T> {}
var empty1: Empty<string> = '';
var empty2: Empty<number> = 0;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string> = {
  data: '',
};
var notEmpty2: NotEmpty<number> = {
  data: 0,
};
// notEmpty1 = notEmpty2; // ERROR!
// notEmpty2 = notEmpty1; // ERROR!
