// 💙ch8. 이넘(열거형): 상수 집합
// 여러 개의 상수를 단위로 묶어 사용
// 타입 자동 추론으로 가독성 향상
enum ShoesBrand {
  Nike,
  Adidas,
  NewBalance,
}
const newShoes = ShoesBrand.Nike; // 0
const oldShoes = ShoesBrand.Adidas; // 1
const wishShoes = ShoesBrand.NewBalance; // 2

// 1. 숫자형 이넘: 이넘 속성 값이 숫자(기본값)
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
/* 👉컴파일
"use strict";

var Direction;

(function (Direction) {
  Direction[Direction["Up"] = 0] = "Up";
  Direction[Direction["Down"] = 1] = "Down";
  Direction[Direction["Left"] = 2] = "Left";
  Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));

// Direction["Up"] = 0은 할당연산자 =의 값인 0만 남는다.
// 즉 Direction[0] = 'Up // 리버스 매핑❗❗
*/
enum Direction2 {
  Up = 10, // 10
  Down, // 11
  Left, // 12
  Right, // 13
}
enum Direction3 { // 권장 표기법
  Up = 10,
  Down = 11,
  Left = 12,
  Right = 13,
}

// 2. 문자형 이넘: 주로 이 형태를 쓴다.
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

// 3. 혼합 이넘: 숫자, 문자를 섞어서 선언한 이넘. 값을 추측하기 어렵기 때문에 비권장
enum Answer {
  Yes = 'Yes',
  No = 1,
}

// 4. 이넘값 연산: 비권장
enum Authorization {
  User, // 0
  Admin, // 1
  SuperAdmin = User + Admin, // 0 + 1 = 1
  God = 'abc'.length, // 3
}

// 5. const 이넘
// js로 컴파일시 코드양을 줄여줌
// 이넘값 연산 방식 사용 불가, 고정 값만 사용 가능
enum logLevel {
  Debug = 'Debug',
  Info = 'Info',
  Error = Debug + Info, // "DebugInfo"
}
/* 👉컴파일
"use strict";

var logLevel;

(function (logLevel) {
    logLevel["Debug"] = "Debug";
    logLevel["Info"] = "Info";
    logLevel["Error"] = "DebugInfo";
})(logLevel || (logLevel = {}));
*/

const enum logLevel2 {
  Debug = 'Debug',
  Info = 'Info',
  // Error = Debug + Info,
  // Warning = 'warning'.length
}
const appLevel = logLevel2.Debug;
/* 👉컴파일
"use strict";

const appLevel = "Debug"
*/
