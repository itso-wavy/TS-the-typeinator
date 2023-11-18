// 💙ch5. 인터페이스
interface User {
  name: string;
  age: number;
  hobby?: string;
}

const user1: User = {
  name: 'wavy',
  age: 30,
};
const user2: User = {
  name: 'wavy',
  age: 30,
  hobby: 'watching movie',
};

interface Person {
  name?: string; // 옵셔널 파라미터 적용
  age: number;
}
function logPersonsAge(someone: Person): Person {
  console.log(someone.age);
  return someone;
}
logPersonsAge(user1); // '30' user1
logPersonsAge({ age: 100 });

// 인터페이스 상속
interface Info {
  name?: string; // 옵셔널 파라미터 적용
  age: number;
}
interface Developer extends Info {
  skill: string;
}
class Info {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  logAge() {
    console.log(this.age);
  }
}

class Developer extends Info {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
  logDeveloperInfo() {
    this.logAge();
    console.log(this.name);
    console.log(this.skill);
  }
}

const wavy = new Developer('wavy', 30, 'typescript');
wavy.logDeveloperInfo(); // 30 'wavy' 'typescript'
const dev2 = {
  name: 'dev2',
  age: 10,
  skill: 'javascript',
};

// 인덱싱 타입 정의
interface StringArray {
  [index: number]: string;
}

const stringArray: StringArray = ['a', 'b', 'c'];
const stringArray2: string[] = ['a', 'b', 'c'];

interface NumberObject {
  [key: string]: number; // 인덱스 시그니처: 속성의 이름은 모르나 속성 타입과 속성 값을 아는 경우에 사용
}

const numberObject: NumberObject = {
  biginner: 1,
};

const level = numberObject['biginner']; // const level: number

interface IndexSignature {
  name: string;
  id: string;
  [property: string]: string;
}

const indexObject: IndexSignature = {
  name: 'wavy',
  id: '123',
  hobby: 'watching movies',
};
