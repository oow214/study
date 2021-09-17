// 조건부 연산자
// 조건 ? truthy할 때 표현식 : falsy할 때 표현식
const cutOff = 80;

const passChecker = (score) => score > cutOff ? '합격입니다!' : '불합격입니다!';

// if문일 때
/*
if (score > cutOff) {
	return '합격!';
} else {
	return '불합격!';
}
*/

console.log(passChecker(75));


// Spread 구문
const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing);
console.log(interactiveWeb);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);


const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte,
  chocolate: '20ml',
}

console.log(latte);// {esspresso: "30ml", milk: "150ml"}console.log(cafeMocha);// {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}


function sayHi() {
  console.log('Hi!');
}

const title = 'yeonwoo';
const birth = 2002;
const job = '귀염둥이';

// 프로퍼티 네임과 변수나 함수 이름이 같다면 축약해서 사용할 수 있다.
const user = {
  title,
  birth,
  job,
  sayHi,
};

console.log(user);// {title: "yeonwoo", birth: 2002, job: "귀염둥이", sayHi: ƒ}

// 옵셔널 체이닝
function printCatName(user) {
  console.log(user.cat.name);
}

const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  }
}

printCatName(user1);// Crew

// 구조 분해
// Array Destructuringconst members = ['코딩하는효준', '글쓰는유나', '편집하는민환'];
const [macbook, ipad, coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
};

// const { title, price } = macbookPro;
// const { title: product, price } = macbookPro;
const propertyName = 'title';
const { [propertyName]: product } = macbook;

console.log(product); // 맥북 프로 16형
console.log(price); // 3690000

// 에러
throw new TypeError('타입 에러가 발생했습니다.');

const err = new TypeError('타입 에러 발생!');
throw error;

consloe.log(error.name);
consloe.log(error.message);