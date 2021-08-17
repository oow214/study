/*
//숫자형
console.log((2 + 3) * 2);

//몫만 구하기
const a = Math.trunc(4 / 3);
console.log(typeof a, a);

//문자열
console.log("연우"); //따옴표는 출력되지 않는다.
console.log('안녕 나는 \'연우\'야! \'떡볶이\'는 진짜 맛있어!');
console.log("푸른"+"하늘");

//불 대수는 명제에 있어서 참 거짓을 나눈다!
console.log(2 < 1 && 'yeonwoo' !== 'yeonwoo');
console.log(7 !== 7 || 4 < 3); //false

let x = 3;
console.log(x > 4 || !(x > 2)); //false
*/

/*
//자료형 확인 - typeof
console.log(typeof 1);
console.log(typeof '1');
console.log(typeof `1`);
console.log(typeof true);

console.log(typeof "Hello" + "Yeonwoo!"); //StringYeonwoo가 출력됨.
//typeof는 사칙연산자보다 우선순위가 높아서 먼저 연산됐다.
console.log(typeof (8 - 3)); //괄호를 통해 우선순위 정해주기

typeof (6 * 2 === 11 || 13 - 7 < 7 && !true);
//typeof false; // boolean
*/

//형 변환(Type Conversion)
console.log(Number('10') + Number('5'));
console.log(String(5) + String(10));

let x = '문자';
//let x = '123';
console.log(x); //'문자'면 NaN, 숫자면 형변환된다.
console.log(Number(x));
console.log(typeof x);
console.log(typeof Number(x));

let y = false;
console.log(y);
console.log(Boolean(y)); // ''(빈문자열), 0, NaN은 false로 변한다.
console.log(typeof y);
console.log(typeof Boolean(y)); 
//불린 값으로 형변했을 때 false가 나오는 값을 falsy값이라 한다.

//NaN(not a number)
//NaN은 숫자가 아님을 표시하는 값이지만 Number의 속성이기 때문에 Number의 자료형(객체)이라 인식이 된다.
let y = NaN;
let z = Number.NaN; //Number의 한 속성이라고 자세히 표시한 것 (객체.속성)
let x = Number.MIN_VALUE; //Number 객체의 다른 속성 (0에 가까운 가장 작은 양수)
console.log(typeof y); //number
console.log(typeof z); //number
console.log(typeof x); //number
