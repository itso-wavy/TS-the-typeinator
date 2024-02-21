- [Typescript](#typescript)
  - [1. 시작하기](#1-시작하기)
    - [(1) 타입스크립트 프로젝트 환경 구성](#1-타입스크립트-프로젝트-환경-구성)
    - [(2) VSCode ESLint 플러그인 관련 설정](#2-vscode-eslint-플러그인-관련-설정)
  - [2. 기초: 변수와 함수의 타입 정의](#2-기초-변수와-함수의-타입-정의)
    - [(1) 데이터 타입(9)](#1-데이터-타입9)
    - [(2) 타입 지정](#2-타입-지정)
    - [(3) 타입 정의](#3-타입-정의)
      - [1) 인터페이스](#1-인터페이스)
      - [2) 타입 별칭](#2-타입-별칭)
      - [3) 인터페이스 vs 타입 별칭](#3-인터페이스-vs-타입-별칭)
  - [3. 고급: TS 제공 타입 기능](#3-고급-ts-제공-타입-기능)
    - [(1) 타입 조합](#1-타입-조합)
      - [1) 유니언(`|`) 타입](#1-유니언-타입)
      - [2) 인터섹션(`&`) 타입](#2-인터섹션-타입)
    - [(2) 타입 조합](#2-타입-조합)

# Typescript

- JS + 타입(**에러 방지**) + 코드 가이드(**개발 편의**)
- microsoft 개발

## 1. 시작하기

### (1) 타입스크립트 프로젝트 환경 구성

1. 프로젝트 폴더 생성
2. `npm init -y`로 `package.json` 파일 생성
3. 아래 명령어로 타입스크립트 및 문법 검사, 코드 정리 도구 라이브러리 추가

```sh
npm i -D typescript @babel/core @babel/preset-env @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint prettier eslint-plugin-prettier
```

4. ESLint 설정 파일 추가

```js
// ./.eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
```

5. ESLint ignore 파일 추가

```
// .eslintignore
node_modules
```

### (2) VSCode ESLint 플러그인 관련 설정

1. VSCode의 [ESLint 플러그인](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 설치
2. VSCode에서 `ctrl` + `shift` + `p` / `cmd` + `shift` + `p` 키를 이용하여 명령어 실행 창 표시
3. 명령어 실행 창에 `open settings (json)` 입력 후 선택

![find-user-settings-on-command-palette](./image/command-palette.png)

4. VSCode 사용자 정의 파일인 `settings.json` 파일의 내용에 아래와 같이 ESLint 플러그인 관련 설정 추가.

```js
{
  // ... <-- 기존 내용을 꼭 유지한 상태에서 아래 내용을 추가하고 이 주석은 제거할 것
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.workingDirectories": [
      {"mode": "auto"}
  ],
  "eslint.validate": [
      "javascript",
      "typescript"
  ],
}
```

5. `ctrl` + `,` 또는 `cmd` + `,` 눌러서 VSCode 설정 파일(Settings)에 들어간 후 `format on save` 검색. 아래와 같이 체크가 안되어 있는지 확인.

![format-on-save-off](./image/format-on-save-off.png)

---

## 2. 기초: 변수와 함수의 타입 정의

### (1) 데이터 타입(9)

1.  string
2.  number
3.  boolean
4.  object
5.  Array
6.  _tuple_: 요소의 개수와 각 타입이 지정된 배열
7.  any
8.  null
9.  undefined

### (2) 타입 지정

1. 변수:

```ts
var foo: string = 'wavy';

let newFoo: any = 'abc';
newFoo = 10;
```

2. 객체:

```ts
const developer: { name: string; level: number } = {
  name: 'wavy',
  level: 10000,
};
```

3. 배열:

```ts
const array1: string[] = ['a', 'b', 'c'];
const array2: Array<string> = ['a', 'b', 'c'];
const array3: [string, number] = ['hi', 11]; // 튜플
const array4: (string | number)[] = ['hi', 11];
```

4. 함수:

- 인자와 파라미터의 개수가 일치해야 함.
  - 선택적으로 전달하는 인자는 `옵셔널 파라미터(?)`와 함께 표기

```ts
// 옵셔널 파라미터 사용
function myFunction(first: string, second?: string): void {
  console.log(first, second);
  return;
}

myFunction('hello');
```

### (3) 타입 정의

#### 1) 인터페이스

1. 상속: 기존 선언을 확장

- 주의: 하위 타입은 상위 타입을 변경할 수 없음

```ts
interface Person {
  name: string;
  age?: number; // 옵셔널 파라미터 적용
}
interface Developer extends Person {
  // 인터페이스 상속
  skill: string;
  // name: number; // error!
}

function logDevsAge(someone: Developer): void {
  console.log(someone.age);
}
logDevsAge({ name: 'wavy', skill: 'ts' });
```

2. 인덱싱 타입 정의

```ts
interface Arr {
  [index: number]: string;
}
interface Obj {
  [key: string]: string;
}

// interface IndexSignature {
//   foo1: string;
//   foo2: string;
//   foo3: string;
// }
interface IndexSignature {
  // 인덱싱 시그니처: 정확한 속성 이름과 개수를 모를 때
  id: number;
  name: string;
  [property: string]: string;
}
const indexObject: IndexSignature = {
  id: 123,
  name: 'wavy',
  hobby: 'watching movies',
};
```

#### 2) 타입 별칭

```ts
type Man = string;
interface Korean {
  birthplace: string;
  language: string;
}

type MyTeacher = Man | Korean;

const myTeacher: MyTeacher = 'scott';
```

#### 3) 인터페이스 vs 타입 별칭

1. 대상 타입

- 인터페이스: 객체 데이터 구조 정의
  - string, number 등 정의 불가
- 타입 별칭: 주요 데이터 타입, 유니언, 인터섹션, 제네릭, 유틸리티, 맵드 타입 등 정의

2. 확장성

- 인터페이스: 재선언, 상속을 통한 확장 가능

  ```ts
  // 재선언
  interface Type {
    name: string;
  }
  interface Type {
    age: number;
  }
  const obj: Type = {
    name: '',
    age: 0,
  };

  // 상속
  interface Type2 extends Type {
    skill: string;
  }
  ```

  - 확장가능성을 고려하여 `백엔드와의 인터페이스 정의시` 인터페이스를 사용

- 타입 별칭: 인터섹션 결합으로 확장 가능

  ```ts
  // 인터섹션
  type Type = string;
  type Type2 = number;
  type Type3 = Type & Type2;
  ```

## 3. 고급: TS 제공 타입 기능

### (1) 타입 조합

#### 1) 유니언(`|`) 타입

```ts
interface Type1 {
  age: number;
}
interface Type2 {
  gender: string;
}
function introduce(someone: Type1 | Type2) {
  // 타입 가드: `typeof` 또는 `in 연산자`로 분기 처리
  if ('age' in someone) console.log(someone.age);
  if ('gender' in someone) console.log(someone.gender);
}
```

#### 2) 인터섹션(`&`) 타입

```ts
interface Type1 {
  name: string;
  age: number;
}
interface Type2 {
  name: string;
  skill: string;
}
function introduce(someone: Type1 & Type2) {
  /* {
  name: string;
  age: number;
  skill: string;
} */
  console.log(someone.name, someone.skill);
}
introduce({ name: 'wavy', age: 19, skill: 'ts' });
```

### (2) 타입 조합

<!-- ㄴ유니언
ㄴ인터섹션
ㄴ제네릭
ㄴ유틸리티
ㄴ조건부
ㄴ스트링 리터럴 유니온 -->

---

// TODO:
7.1 타입 별칭이란?
7.2 타입 별칭과 인터페이스의 차이점
**7.2.1 코드 에디터에서 표기 방식 차이
**7.2.2 사용할 수 있는 타입의 차이
**7.2.3 타입 확장 관점에서 차이
7.3 타입 별칭은 언제 쓰는 것이 좋을까?
**7.3.1 타입 별칭으로만 정의할 수 있는 타입들
\_\_7.3.2 백엔드와의 인터페이스 정의
7.4 정리

- **타입**
  `type MyMessage = string | number;`

- 인터페이스 vs 타입

  1. 에디터 안내 차이
  2. 사용 가능 타입 차이
  3. 확장 차이

  - 인터페이스 상속: extends
  - 타입 확장: &

    - 유니언 타입(|)
    - 인터섹션 타입(&)

  - 인터페이스와 타입 같이 사용 가능
  - 8장 **이넘**

    8.1 이넘이란?
    8.2 숫자형 이넘
    8.3 문자형 이넘
    8.4 알아 두면 좋은 이넘의 특징
    **8.4.1 혼합 이넘
    **8.4.2 다양한 이넘 속성 값 정의 방식
    \_\_8.4.3 const 이넘
    8.5 정리

9장 **클래스**

9.1 클래스란?
9.2 클래스 기본 문법
9.3 클래스의 상속
9.4 타입스크립트의 클래스
9.5 클래스 접근 제어자
**9.5.1 클래스 접근 제어자의 필요성
**9.5.2 클래스 접근 제어자: public, private, protected
**9.5.3 클래스 접근 제어자로 정수기 문제 해결하기
**9.5.4 클래스 접근 제어자를 사용할 때 주의해야 할 점
9.6 정리

10장 **제네릭**

10.1 제네릭이란?
10.2 제네릭 기본 문법
10.3 왜 제네릭을 사용할까?
**10.3.1 중복되는 타입 코드의 문제점
**10.3.2 any를 쓰면 되지 않을까?
**10.3.3 제네릭으로 해결되는 문제점
10.4 인터페이스에 제네릭 사용하기
10.5 제네릭의 타입 제약
**10.5.1 extends를 사용한 타입 제약
**10.5.2 타입 제약의 특징
**10.5.3 keyof를 사용한 타입 제약
10.6 제네릭을 처음 사용할 때 주의해야 할 사고방식
10.7 정리

- **제네릭** `const array: Array<T> = [1, 2, 3]` -> 10장

---

11장 두 번째 프로젝트: 전화번호부 앱

11.1 프로젝트 환경 구성
11.2 프로젝트 폴더 구조
**11.2.1 node_modules 폴더
**11.2.2 src 폴더
**11.2.3 .eslintrc.js
**11.2.4 package.json, package-lock.json 파일
**11.2.5 tsconfig.json 파일
11.3 프로젝트 로직
**11.3.1 인터페이스 코드
**11.3.2 api 함수
**11.3.3 전화번호부 클래스
11.4 프로젝트 실습
**11.4.1 타입스크립트 설정 파일의 noImplicitAny 속성 값 변경
**11.4.2 타입스크립트 설정 파일의 strict 속성 값 변경
11.5 프로젝트 실습 풀이: 첫 번째
**11.5.1 클래스 속성 타입 정의
**11.5.2 함수 파라미터 타입 정의
**11.5.3 API 함수 반환 타입 정의
11.6 프로젝트 실습 풀이: 두 번째
**11.6.1 함수 반환 타입 정의
\_\_11.6.2 함수 파라미터에 이넘 타입 적용
11.7 정리

12장 **타입 추론**

12.1 타입 추론이란?
12.2 변수의 타입 추론 과정
12.3 함수의 타입 추론: 반환 타입
12.4 함수의 타입 추론: 파라미터 타입
12.5 인터페이스와 제네릭의 추론 방식
12.6 복잡한 구조에서 타입 추론 방식
12.7 정리

13장 **타입 단언**

13.1 타입 단언이란?
13.2 타입 단언 문법
**13.2.1 타입 단언의 대상
**13.2.2 타입 단언 중첩
\_\_13.2.3 타입 단언을 사용할 때 주의할 점
13.3 null 아님 보장 연산자: !
13.4 정리

14장 **타입 가드**

14.1 타입 가드란?
14.2 왜 타입 가드가 필요할까?
**14.2.1 타입 단언으로 타입 에러 해결하기
**14.2.2 타입 단언으로 해결했을 때 문제점
**14.2.3 타입 가드로 문제점 해결하기
14.3 타입 가드 문법
**14.3.1 typeof 연산자
**14.3.2 instanceof 연산자
**14.3.3 in 연산자
14.4 타입 가드 함수
**14.4.1 타입 가드 함수 예시
**14.4.2 복잡한 경우의 타입 가드 예시
14.5 구별된 유니언 타입
14.6 switch 문과 연산자
**14.6.1 switch 문
**14.6.2 논리?비교 연산자
14.7 정리

15장 **타입 호환**

15.1 타입 호환이란?
15.2 다른 언어와 차이점
**15.2.1 구조적 타이핑
15.3 객체 타입의 호환
15.4 함수 타입의 호환
15.5 이넘 타입의 호환
**15.5.1 숫자형 이넘과 호환되는 number 타입
\_\_15.5.2 이넘 타입 간 호환 여부
15.6 제네릭 타입의 호환
15.7 정리

16장 **타입 모듈**

16.1 모듈이란?
16.2 자바스크립트 모듈
**16.2.1 자바스크립트의 태생적 한계
**16.2.2 자바스크립트 모듈화를 위한 시도들
16.3 자바스크립트 모듈화 문법
**16.3.1 import와 export
**16.3.2 export default 문법
**16.3.3 import as 문법
**16.3.4 import \* 문법
**16.3.5 export 위치
16.4 타입스크립트 모듈
16.5 타입스크립트 모듈 유효 범위
16.6 타입스크립트 모듈화 문법
**16.6.1 import type 문법
**16.6.2 import inline type 문법
**16.6.3 import와 import type 중 어떤 문법을 써야 할까?
16.7 모듈화 전략: Barrel
16.8 정리

17장 **유틸리티 타입**

17.1 유틸리티 타입이란?
17.2 Pick 유틸리티 타입
**17.2.1 Pick 타입 예시
**17.2.2 Pick 타입 문법
17.3 Omit 유틸리티 타입
**17.3.1 Omit 타입 문법
**17.3.2 Omit 타입 예시
**17.3.3 Omit 타입과 Pick 타입 비교
17.4 Partial 유틸리티 타입
**17.4.1 Partial 타입 문법
**17.4.2 Partial 타입 예시
17.5 Exclude 유틸리티 타입
**17.5.1 Exclude 타입 문법
**17.5.2 Exclude 타입 예시
17.6 Record 유틸리티 타입
**17.6.1 Record 타입 첫 번째 예시
**17.6.2 Record 타입 두 번째 예시
**17.6.3 Record 타입 문법
17.7 그 외의 유틸리티 타입
17.8 정리

18장 **맵드 타입**

18.1 맵드 타입 첫 번째 예시: in
18.2 map( ) API로 이해하는 맵드 타입
18.3 맵드 타입 두 번째 예시: keyof
18.4 맵드 타입을 사용할 때 주의할 점
18.5 매핑 수정자
18.6 맵드 타입으로 직접 유틸리티 타입 만들기
18.7 정리

---

19장 실전 프로젝트 환경 구성

19.1 타입스크립트 설정 파일
19.2 타입스크립트 설정 파일 생성
19.3 타입스크립트 설정 파일의 루트 옵션
**19.3.1 files
**19.3.2 include
**19.3.3 exclude
**19.3.4 extends
19.4 타입스크립트 설정 파일의 컴파일러 옵션
**19.4.1 target
**19.4.2 lib
**19.4.3 strict
**19.4.4 noImplicitAny
**19.4.5 strictNullChecks
**19.4.6 allowJs
**19.4.7 sourceMap
**19.4.8 jsx
**19.4.9 baseUrl
**19.4.10 paths
**19.4.11 removeComments
19.5 타입스크립트 설정 파일과 빌드 도구
**19.5.1 웹팩이란?
**19.5.2 웹팩에 타입스크립트 설정하기
19.6 타입 선언 파일
**19.6.1 타입 선언 파일 사용 방법
**19.6.2 타입 선언 파일을 언제 사용해야 하는가?
19.7 외부 라이브러리의 타입 선언과 활용
**19.7.1 외부 라이브러리를 사용하는 방법
**19.7.2 외부 라이브러리의 타입 선언 파일: Definitely Typed
**19.7.3 외부 라이브러리에 내장된 타입 선언 파일
\_\_19.7.4 외부 라이브러리에 타입 선언 파일이 지원되지 않는 경우
19.8 정리
