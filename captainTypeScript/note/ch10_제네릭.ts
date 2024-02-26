// 💙ch10. 제네릭: 사용 시점에 타입 지정
// 타입만 다른 동일 코드의 반복을 줄여줌

// 1. 사용 예시
/* 1) 함수
function getText(text: string): string {
  return text;
}
function getNumber(text: number): number {
  return text;
} 
*/
function getParam<T>(Param: T): T {
  return Param;
}
const str = getParam<string>('123'); // str: string
const num = getParam<number>(123); // num: number

/* 2) 인터페이스
interface ProductDropdown {
  value: string;
  selected: boolean;
}
interface StockDropdown {
  value: number;
  selected: boolean;
}
interface AddressDropdown {
  value: { city: string; zipcode: string };
  selected: boolean;
} 
var product: ProductDropdown;
var stock: StockDropdown;
var address: AddressDropdown;
*/
interface Dropdown<T> {
  value: T;
  selected: boolean;
}
var product: Dropdown<string>;
var stock: Dropdown<number>;
var address: Dropdown<{ [key: string]: string }>;

// 2. 타입 제약
// 1) extends: 제네릭으로 특정 타입의 확장만 받을 수 있도록 제한
function allAcceptable<T>(thing: T): T {
  return thing;
}
allAcceptable<string>('hello');
allAcceptable<boolean>(false);
allAcceptable<number[]>([1, 2, 3]);
allAcceptable<any>({ name: 'wavy' });

function lengthOnlyAcceptable<T extends { length: number }>(thing: T) {
  return thing.length;
}
lengthOnlyAcceptable<string>('W'); // 1
lengthOnlyAcceptable<number[]>([1, 2]); // 2
lengthOnlyAcceptable<{ length: number }>({ length: 3 }); // 3
// lengthOnlyAcceptable<number>(123); // ERROR! 인자에 length 속성이 없음
lengthOnlyAcceptable('100'); // 타입 추론 적용됨

// 2) keyof: 타입 객체의 key만 추출하여 유니언 타입으로 변환
interface Man {
  name: string;
  age: number;
}
type DevKeys = keyof Man; // "name" | "age"
const foo: DevKeys = 'age';

// 3) extends & keyof
function printKeys<T extends keyof { name: string; age: number }>(value: T) {
  console.log(value);
}
/* 
function printKeys<T extends "name" | "age">(value: T): void
*/
printKeys('name');
printKeys('age');
// printKeys('skill'); // ERROR!

// 발생할 수 있는 문제
function printTextLength<T>(text: T) {
  // console.log(text.length); // 제네릭 범위에 제한이 없어 컴파일러가 파라미터에 length 속성이 있는지를 예상할 수 없음
}

// 해결법1
function printTextLength2<T extends { length: number }>(text: T) {
  console.log(text.length);
}
printTextLength<string>('hello');

// 해결법2
function printTextLength3<T>(text: T[]) {
  // 파라미터의 타입을 length 속성을 가지고 있는 '배열'로 강제
  console.log(text.length);
}

printTextLength3<number>([1, 2, 3]);
printTextLength3([true, false]); // 제네릭 타입 => 타입 추론
