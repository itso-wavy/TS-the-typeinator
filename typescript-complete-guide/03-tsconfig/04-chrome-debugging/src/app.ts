// "strictNullChecks": 엄격한 null 검사

// "strictNullChecks": true의 경우
const $button = document.querySelector('button');
// const $button: HTMLButtonElement | null

const $button2 = document.querySelector('button')!;
// $button2: HTMLButtonElement: ! 연산자로 null 가능성 제거
$button2.addEventListener('click', () => {
  console.log('clicked!');
});

// "strictNullChecks": false의 경우
const $button3 = document.querySelector('button')!;

if ($button3) {
  function clickHandler(message: string) {
    console.log('clicked!' + message);
  }

  $button3.addEventListener('click', clickHandler.bind(this, 'hello'));
}

// "noImplicitThis": true,
class MyClass {
  myMethod() {
    console.log(this);
  }
}

let obj = {
  aMethod: new MyClass().myMethod,
};

obj.aMethod(); // 현재 코드 블록 내에서 this의 참좃값을 파악하기 어려운 경우 경고함

// "noImplicitReturns": true
function implicitTest(num: number) {
  if (num > 0) return num;
  if (num <= 0) return;
  return; // 이 부분을 없애면 경고
}

const a = implicitTest(1);
const b = implicitTest(0);
const c = implicitTest(-1);

console.log('debug!');

console.log(a, b, c);
