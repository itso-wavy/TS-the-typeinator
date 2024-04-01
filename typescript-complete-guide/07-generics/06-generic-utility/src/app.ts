/* 
- 제네릭(Generic): 타입 재사용
- 제네릭 유틸리티(Generic Utility):  유틸리티 기능을 제공하는 제네릭 타입. Partial, Required, Pick, Omit 등 
*/

// Partial<T>: 모든 속성이 옵션이 되는 객체 타입으로 바꿔 줌
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date; // 수강 기한
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  /*   return {
    title: title,
    description: description,
    completeUntil: date,
  }; */

  // let courseGoal: CourseGoal = {};
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

// Readonly<T>:
const names = ['Max', 'Anna']; // names: string[]
names.push('Jack');

const names2: Readonly<string[]> = ['Max', 'Anna'];
// names2.pop(); // 수정 불가
