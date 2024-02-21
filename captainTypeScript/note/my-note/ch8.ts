// 💙ch8. 이넘: 상수 집합
enum ShoesBrand {
  Nike,
  Adidas,
  NewBalance,
}
const newShoes = ShoesBrand.Nike; // 0
const oldShoes = ShoesBrand.Adidas; // 1
const wishShoes = ShoesBrand.NewBalance; // 2

// 숫자형 이넘
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

/* 
"use strict";

var Direction;

(function (Direction) {
  Direction[Direction["Up"] = 0] = "Up";
  Direction[Direction["Down"] = 1] = "Down";
  Direction[Direction["Left"] = 2] = "Left";
  Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));

// Direction["Up"] = 0은 할당연산자 =의 값인 0만 남는다.
// 즉 Direction.Up = 0
// Direction[0] = 'Up // 리버스 매핑❗❗
*/

enum Direction2 {
  Up = 10, // 10
  Down, // 11
  Left, // 12
  Right, // 13
}
enum Direction3 { // 이 표기를 권장한다.
  Up = 10,
  Down = 11,
  Left = 12,
  Right = 13,
}

// 문자형 이넘: 주로 이 형태를 쓴다.
enum Direction4 {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

enum ArrowKey {
  KEY_UP = 'KEY_UP',
  KEY_DOWN = 'KEY_DOWN',
}

// 혼합 이넘: 숫자, 문자를 섞어서 선언한 이넘. 값을 추측하기 어렵기 때문에 비권장
enum Answer {
  Yes = 'Yes',
  No = 1,
}

// 다양한 속성 값 정의 방식
enum Authorization {
  User, // 0
  Admin, // 1
  SuperAdmin = User + Admin, // 0 + 1 = 1
  God = 'abc'.length, // 3
}
// 이넘 속성 값의 연산도 지원된다.

// const 이넘: js 컴파일시 새로운 객체 코드가 생성되지 않아 코드양을 줄여줌
// '다양한 속성 값 정의 방식'을 사용할 수 없고 속성 값으로 고정 값만 이용 가능함
const enum logLevel {
  Debug = 'Debug',
  Info = 'Info',
  Error = 'Error',
}

/* 
"use strict"
*/
