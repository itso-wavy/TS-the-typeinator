// 💙ch11. 타입 추론

// 1. 변수: 선언시 초깃값을 기반으로 타입 추론
const a = 'a'; // const는 값의 변경이 불가하므로 타입 추론 X
var b = 'b'; // b: string
// b = 100; // ERROR! 초깃값과 다른 타입의 값은 할당 불가
b = 'a';

// 2. 함수: 함수의 파라미터 타입과 내부 로직으로 반환값의 타입 추론
function sum(a: number, b: number): number {
  return a + b;
}
const result = sum(1, 2); // result: number // 함수의 반환 타입으로 타입 추론

function sum2(a: number, b: number) {
  // 함수의 반환 타입 추론(number)
  return a + b;
}
const result2 = sum2(1, 2); // result: number

function sum3(a: number, b: number) {
  // 함수의 반환 타입 추론(boolean)
  return a === b;
}

function getA(a) {
  // function getA(a: any): any
  return a;
}

function getA2(a: number) {
  // function getA2(a: number): number
  return a;
}

function getA3(a = 10) {
  // function getA3(a?: number): number;
  return a;
}
// getA3('a') // ERROR! 파라미터 기본값 다른 타입의 값은 할당 불가

function getA4(a: number) {
  // function getA4(a: number): string
  const c = 'hi';
  return a + c;
}

// 3. 인터페이스와 제네릭: 상속 받은 자식 인터페이스가 받은 제네릭 타입을 부모의 제네릭으로 타입 추론(T = <T>)
interface Dropdown<T> {
  title: string;
  value: T;
}
const dropdownItem: Dropdown<number> = {
  title: '',
  value: 0, // Dropdown<number>.value: number
};

interface DetailedDropdown<K> extends Dropdown<K> {
  tag: string;
  description: string;
}
const dropdownItem2: DetailedDropdown<number> = {
  title: 'title',
  value: 0, // 자식 인터페이스가 받은 제네릭 타입이 부모 인터페이스의 제네릭 타입으로 지정됨
  tag: '',
  description: '',
};
