/* 
class Dev extends Person { // 상속
  constructor(name, skill) {
    super(name, skill);

    this.greet(); // 자식 클래스 내부에서 부모 클래스 메서드 호출
  }

  coding() {
    console.log('🔥');
  }
}
 */

class Person {
  private name: string;
  protected skill: string;

  constructor(name: string, skill: string) {
    this.name = name;
    this.skill = skill;
  }

  protected sayHi(): void {
    console.log('hi');
  }
}

class Dev extends Person {
  constructor(name: string, skill: string) {
    super(name, skill);
    this.sayHi();
  }

  coding() {
    console.log('🔥 ' + this.skill);
  }
}
