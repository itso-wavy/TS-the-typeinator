// 💙ch15. 타입 모듈
// 1. 모듈: 코드를 논리적인 단위로 분리 사용하는 개념
// * 의의: 모듈화를 통해 함수, 변수의 전역 스코프 사용을 줄이고 네임스페이스 충돌을 방지할 수 있게 됨

// 2. 문법
// (1) Common.js(exports-require)
// math.js
function sum(a, b) {
  return a + b;
}
module.exports = {
  sum,
};

// app.js
var math = require('./math.js');
console.log(math.sum(10, 20));

// (2) ES6.js(export-import))
// 1) named export
// math.js
function sum(a, b) {
  return a + b;
}
export { sum };

// app.js
import { sum } from './math.js';
console.log(sum(10, 20));

// 2) default export
// math.js
export default sum; // 단일 대상

// app.js
import sum from './math.js';

// 3) import as
// app.js
import { sum as add } from './math.js';
console.log(add(10, 20));

// 4) import *
// math.js
function sum(a, b) {}
function sub(a, b) {}
function multi(a, b) {}

export { sum, sub, multi };

// app.js
import * as math from './math.js';
console.log(math.sum(10.2));

// 5) dynamic import: 비동기적 모듈 로드
import('./math.js').then(() => {});

// 3. 타입 모듈화
// hero.ts
interface Hero {
  name: string;
  skill: string;
}
export { Hero };

// app.ts
import { Hero } from './hero.ts';

var hero: Hero = {
  name: 'wavy',
  skill: 'flying',
};

// ts 프로젝트 내에서는 js, ts 파일의 변수, 타입 선언이 모두 전역 범위에 등록됨
// util.ts
type Person = {
  name: string;
};
// app.ts
var wavy: Person = {
  name: 'wavy',
};
// type Person = { // 중복 에러
//   name: string;
//   age: number;
// };

// 4. 모듈화 문법: type
// 1) import type: 타입 임포트 명시
// hero.ts
interface Hero {
  name: string;
  skill: string;
}
export { Hero };

// app.ts
import type { Hero } from './hero';
var hero: Hero = {
  name: 'wavy',
  skill: 'flying',
};

// 2) import inline type: 타입+값 임포트 명시
// hero.ts
interface Hero {
  name: string;
  skill: string;
}
function flying() {}
var Heroin = {};
export { Hero, flying, Heroin };

// app.ts
import { type Hero, flying, Heroin } from './hero';

// 5. 모듈화 전략: Barrel
// ./hero/hulk.ts
interface Banner {
  name: string;
}
export { Banner };

// ./hero/ironman.ts
interface Tony {
  name: string;
}
export { Tony };

// ./hero/captain.ts
interface Steve {
  name: string;
}
export { Steve };

// ./hero/index.ts
// import { Banner } from './hulk';
// import { Tony } from './ironman';
// import { Steve } from './captain';

// export { Banner, Tony, Steve };

export { Banner } from './hulk';
export { Tony } from './ironman';
export { Steve } from './captain';

// app.ts
// import { Banner } from './hero/hulk';
// import { Tony } from './hero/ironman';
// import { Steve } from './hero/captain';
import { Banner, Tony, Steve } from './hero';

var banner: Banner = { name: 'banner' };
var tony: Tony = { name: 'tony' };
var steve: Steve = { name: 'steve' };
