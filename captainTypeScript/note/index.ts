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

/* 
- 데이터 타입(9)
  1. string 
  2. number
  3. boolean
  4. object
  5. Array
  6. tuple: 특정 형태를 갖는 배열, 배열 길이 고정+각 요소의 타입 지정된 배열
  7. any
  8. null
  9. undefined

const array5: Array<T> = [1, 2, 3]; 제네릭 -> 10장

- 인터페이스 
interface Person {
  name?: string; // 옵셔널 파라미터 적용
  age: number;
}

  - 인덱싱 타입 정의
  interface StringArray {
    [index: number]: string; // 인덱스 시그니처: 속성의 이름은 모르나 속성 타입과 속성 값을 아는 경우에 사용
  }
  - 선언 병합: 인터페이스를 재선언하면 기존 인터페이스의 내용과 병합됨

- 타입 
type MyMessage = string | number;

- 인터페이스 vs 타입

  1. 에디터 안내 차이
  2. 사용 가능 타입 차이
  3. 확장 차이
  - 인터페이스 상속: extends
  - 타입 확장: &
    - 유니언 타입(|)
    - 인터섹션 타입(&)

  - 인터페이스와 타입 같이 사용 가능




*/

// 💙ch8. 이넘

// 💙ch9. 클래스

// 💙ch10. 제네릭
