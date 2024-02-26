// 💙ch9. 클래스: 유사 객체를 쉽게 생성하는 문법
// 캡슐화, 상속, 다형성, 추상화

/* js 문법
function RedBeanBread(name, subIngr = '') { // 생성자 메서드
  this.ingr = '팥'; // 클래스 속성(필드, 멤버)
  this.#subIngr = subIngr; // private
  this._name = subIngr + name + '빵';
}
RedBeanBread.prototype.getIngr = function () { // 클래스 메서드
  console.log(this.#subIngr || this.ingr);
};

class RedBeanBread2 {
  constructor(name, subIngr = '') {
    this.ingr = '팥';
    this.#subIngr = subIngr;
    this._name = subIngr + name + '빵';
  }

  getIngr() {
    console.log(this.#subIngr || this.ingr);
  }
}

class RedBeanBread3 extends RedBeanBread2 { // 상속
  constructor(...props) {
    super(...props);

    this.getIngr(); // 자식 클래스 내부에서 부모 클래스 메서드 호출
  }

  getName() {
    console.log(this._name);
  }
}

const 붕어빵 = new RedBeanBread('붕어'); // 클래스 인스턴스
const 슈크림붕어빵 = new RedBeanBread2('붕어', '슈크림');
const 초코붕어빵 = new RedBeanBread3('붕어', '초코'); // '초코'
초코붕어빵.getIngr(); // '초코'
초코붕어빵.getName(); // '초코붕어빵'
*/

// ts 문법
class RedBeanBread {
  // 클래스 속성 타입 지정(접근 제어자)
  ingr: string; // public
  #subIngr: string; // private
  protected _name: string;

  constructor(name: string, subIngr = '') {
    this.ingr = '팥';
    this.#subIngr = subIngr;
    this._name = subIngr + name + '빵';
  }

  getIngr() {
    console.log(this.#subIngr || this.ingr);
  }

  setIngr(newIngr: string) {
    this._name = this._name.replace(this.#subIngr, newIngr);
    this.#subIngr = newIngr;

    console.log(`이제부터 ${this._name}이 제조 됩니다.`);
  }

  protected taste() {
    console.log('yammy!');
  }
}
const 붕어빵 = new RedBeanBread('붕어');
붕어빵.getIngr(); // '팥'
붕어빵.ingr = '앙금';
붕어빵.getIngr(); // '앙금'

// 붕어빵.#subIngr = '피자' // ERROR!: private prop
// 붕어빵._name = '피자' // ERROR!: protected prop
붕어빵.setIngr('피자'); // '이제부터 피자붕어빵이 제조 됩니다.'
붕어빵.getIngr(); // '피자'

class RedBeanBread2 extends RedBeanBread {
  constructor(name: string, subIngr = '') {
    super(name, subIngr); //  super(...props) 사용 불가

    this.taste();
  }

  getName() {
    console.log(this._name);
  }
}

const 붕어빵2 = new RedBeanBread2('붕어'); // 'yammy!'
붕어빵2.ingr; // '팥'
// 붕어빵.#subIngr = '피자' // ERROR!: private prop
// 붕어빵._name = '피자' // ERROR!: protected prop
붕어빵2.getName(); // '붕어빵'
// 붕어빵2.taste() // ERROR!: protected prop
