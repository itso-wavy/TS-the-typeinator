import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { Product } from './product.model';

/* @types/lodash */
// import _ from 'lodash'

// console.log(_.shuffle([1,2,3]))

/* declare + js */
declare var GLOBAL: any;

console.log(GLOBAL);

/* class-transformer + reflect-metadata: 객체를 클래스로 변환 */
const fetchedProducts = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];

const p1 = new Product('A Carpet', 29.99);

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, fetchedProducts); // 클래스, 변환 대상 객체

for (const prod of loadedProducts) {
  console.log(prod.getInformation()); // 객체에 추가된 메서드 확인
}

/* class-validator: 데코레이터를 이용한 유효성 검사 */
const newProd = new Product('', -5.99);

validate(newProd).then(err => {
  // error 처리를 catch 블럭이 아닌 then 블럭에서
  if (err.length > 0) {
    console.log('VALIDATION ERRORS!');
    console.log(err);
  } else {
    console.log(newProd.getInformation());
  }
});
