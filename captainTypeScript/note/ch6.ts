// 💙ch6. 연산자 사용(|, &)
// 유니언 타입(|): 타입에 따른 메서드 사용
function logText(text: string | number) {
  console.log(text);
}

logText('hello');
logText(123);

// typeof 또는 in 연산자로 분기 처리 = 타입 가드
interface Type1 {
  name: string;
  age: number;
}
interface Type2 {
  name: string;
  skill: string;
}

function introduce(someone: Type1 | Type2) {
  if ('age' in someone) {
    console.log(someone.age); // (parameter) someone: Type1
    return;
  }
  if ('skill' in someone) {
    console.log(someone.skill); // (parameter) someone: Type2
    return;
  }
}

function logText2(text: string | number) {
  console.log(text.valueOf()); // (method) valueOf(): string | number
}

// 인터섹션 타입(&)
function introduce2(someone: Type1 & Type2) {
  console.log(someone.name);
  console.log(someone.skill);
}
/* 
{
  name: string;
  age: number;
  skill: string;
}
 */
introduce2({ name: '캡틴', age: 123, skill: '어셈블' });
// introduce2({ name: '캡틴' }); // ERROR!
