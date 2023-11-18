// 💙ch7. 타입 별칭: 타입을 변수화
type MyMessage = string | number;

function logText3(text: MyMessage) {
  // ...
}
const message: MyMessage = '안녕';

logText3(message);

/* 
타입과 인터페이스 차이:
1. 에디터 안내 차이
2. 사용 가능 타입 차이
3. 확장 차이
*/

// 1. vscode 인텔리전스에서 보여주는 타입 정보가 다름
type Type3 = {
  id: string;
  name: string;
};

interface Type4 {
  id: string;
  name: string;
}

const obj: Type3 = {
  id: '',
  name: '',
};
/* 
type Type3 = {
  id: string;
  name: string;
}
*/
const obj2: Type4 = {
  id: '',
  name: '',
};
/* interface Type4 */

// 2. 인터페이스는 주로 객체의 타입을 정의하는 데 사용(여러 값의 타입을 한번에 지정)/타입 별칭은 주요 데이터 타입, 유니언, 인터섹션 타입 정의에 사용. 제네릭, 유틸리티 타입 등에도 사용 가능❗❗
type TShirt = any;
type Shoes = any;
type Adult = any;

interface Person {
  name?: string; // 옵셔널 파라미터 적용
  age: number;
}

type Product = TShirt | Shoes;
type Teacher = Person & Adult;

type Gilbut<T> = {
  book: T;
};
type Beer = any;
type MyBeer = Pick<Beer, 'brand'>;

// 인터페이스와 타입 같이 사용 가능
interface Man {
  name: string;
  age: number;
}
type Korean = {
  Language: string;
};

type MyTeacher = Man & Korean;

// 3. 타입 확장(타입+타입=뉴타입) 차이
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

// ! 타입 별칭으로만 정의가 가능한 곳에서는 별칭을 사용하고, 백엔드와의 인터페이스를 정의하는 곳에서는 인터페이스를 사용하자.
type Developer = string; // 일반 데이터 타입
type StringOrNumber = string | number; // 유니온
type Admin = Person & Developer; // 인터섹션

// 제네릭
type Dropdown<T> = {
  id: string;
  title: T;
};

// 유틸리티 타입: 기존에 정의된 타입 중 일부만 사용
type Player = {
  name: string;
  age: number;
  role: number;
};
type OnlyName = Pick<Player, 'name'>;

// 맵드 타입: 기존에 정의된 타입을 변경
type Picker<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 백엔드와의 인터페이스 정의
// jsdocs 사례
/**
 * @typedef {Object} User
 * @property {string} id - 사용자 아이디
 * @property {string} name - 사용자 이름
 */

/**
 * @returns {User} 1번 사용자
 */
function fetchData() {
  return fetch('http://localhost:3000/users/1');
}

// typescript 사례
type User = {
  id: string;
  name: string;
};
