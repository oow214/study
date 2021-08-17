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





