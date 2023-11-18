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

// 함수 특징: input에 따라 output의 값이 달라진다.
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
