// 💙맵드 타입: 기존에 정의된 타입을 변경
type Picker<T, K extends keyof T> = {
  [P in K]: T[P];
};
type Person = {
  name: string;
  age: number;
  email: string;
};

// Person 타입에서 일부 속성만을 선택하여 새로운 타입을 만드는 예시
type PartialPerson = Picker<Person, "name">;
type PartialPerson2 = Picker<Person, "name" | "email">;
const partialPerson: PartialPerson = {
  name: "John",
};
const partialPerson2: PartialPerson2 = {
  name: "John",
  email: 'email'
};

// Person 타입에서 age 속성을 제외한 새로운 타입을 만드는 예시
type WithoutAge = Picker<Person, Exclude<keyof Person, "age">>;
const withoutAge: WithoutAge = {
  name: "John",
  email: "john@example.com",
};

// Person 타입에서 모든 속성을 선택하여 새로운 타입을 만드는 예시
type FullPerson = Picker<Person, keyof Person>;
const fullPerson: FullPerson = {
  name: "John",
  age: 123,
  email: "john@example.com",
};

