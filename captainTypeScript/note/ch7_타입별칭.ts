// 💙ch7. 타입 별칭: 타입을 변수화
type MyMessage = 'hello' | 'bye';

function logText3(text: MyMessage) {
  // ...
}
const message: MyMessage = 'hello';

logText3(message);

/* 
타입과 인터페이스 차이:
1. 에디터 안내 차이
2. 사용 가능 타입 차이
3. 확장 가능성 차이
*/

// 1. vscode 인텔리전스에서 보여주는 미리보기 정보가 다름
type Type3 = {
  id: string;
  name: string;
};
interface Type4 {
  id: string;
  name: string;
}

var obj: Type3;
/* 
type Type3 = {
  id: string;
  name: string;
}
*/
var obj2: Type4;
/* interface Type4 */

// 2.
// 인터페이스: 객체
// 타입 별칭:주요 데이터 타입, 유니언, 인터섹션, 제네릭, 유틸리티 타입
type TShirt = any;
type Shoes = any;
type Adult = any;
type Product = TShirt | Shoes; // 유니언
type Teacher = TShirt & Adult; // 인터섹션

type Gilbut<T> = {
  // 제네릭
  book: T;
};
type Beer = any;
type MyBeer = Pick<Beer, 'brand'>; // 유틸리티

// 인터페이스와 타입 같이 사용 가능
interface Man {
  name: string;
  age: number;
}
type Korean = {
  Language: string;
};

type MyTeacher = Man & Korean;

// 3. 타입 확장 차이
// 인터페이스 확장: NewType extends Type {}
// 타입 확장: NewType = Type1 & Type2

// 선언 병합: 인터페이스를 재선언하면 기존 인터페이스의 내용과 병합됨
interface Inter {
  name: string;
  age: number;
}

interface Inter {
  skill: string;
}

const obj3: Inter = {
  name: '',
  age: 0,
  skill: '',
};

// 😎타입 별칭 예시 코드
type Developer = string; // 일반 데이터 타입
type StringOrNumber = string | number; // 유니온
type Admin = Man & Developer; // 인터섹션

// 제네릭: 일반화된 데이터 타입 생성
type Dropdown<T> = {
  id: number;
  title: T;
};
const dropdown: Dropdown<string> = {
  id: 1,
  title: 'title',
};

// 유틸리티 타입: 기존에 정의된 타입 중 일부만 사용
type Player = {
  name: string;
  age: number;
  role: number;
};
type OnlyName = Pick<Player, 'name'>;
/* 
type OnlyName = {
    name: string;
}
*/

// 맵드 타입: 기존에 정의된 타입을 변경
type Picker<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 😎백엔드와의 인터페이스 정의
// jsdocs 사례
/**
 * @typedef {Object} User
 * @property {string} id - 사용자 아이디
 * @property {string} name - 사용자 이름
 */

/**
 * @returns {User} 1번 사용자
 */
async function fetchData() {
  const response = await fetch('http://localhost:3000/users/1');

  return response.json();
}

// typescript 사례
interface User {
  id: string;
  name: string;
}
async function fetchData2(): Promise<User> {
  const response = await fetch('http://localhost:3000/users/1');

  return response.json();
}
