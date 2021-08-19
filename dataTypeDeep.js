//숫자표기법
//지수표기법
let millionaire = 1000000000;
let num = 1e9; 

console.log(millionaire);
console.log(num);
console.log(millionaire === num);

console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);

console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

//16진법 (Hexadecimal)
let hex1 = 0xff; //255
let hex2 = 0xFF; //255

//8진법 (0ctal)
let octal = 0o377; //255

//2진법 (binary numeral system)
let binary = 0b11111111; //255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

//숫자형 메소드
//js에서는 숫자도 객체이다.
let number = new Number(3);
console.log(typeof number);    // object

let oowNumber = 0.3591;
//toFixed(0~100) - 소수에서 소수점 아래의 자릿수를 고정해준다.
console.log(oowNumber.toFixed(3)); //단, 문자열로 반환됨.
console.log(Number(oowNumber.toFixed(3))); //숫자로 형변환 해주기
console.log(+oowNumber.toFixed(3)); //JS의 숫자 형변환! + 붙여준다.

oowNumber = 255;
//toString(2~36)
console.log(oowNumber.toString(2)); //2진수
console.log(oowNumber.toString(8)); //8진수
console.log(oowNumber.toString(16)); //16진수

console.log(255..toString(2)); //정수에 점을 찍으면 메소드 호출인 점 표기법이 아닌 소수점 인식을 함. 정수에는 점 두개 사용
console.log((255).toString(2));



let sum = 0.1 + 0.2;
console.log(sum); //0.30000000000000004

console.log(+oowNumber.toFixed(sum)); //0.3
console.log(Math.round(sum * 10) / 10); //0.3

//////////////////////////////////////////////////////////////////////////////////////
//String
let myString = "   Hi Yeonwoo!!  ";
console.log(myString.length); //문자열의 길이 반환

//문자열은 배열처럼 사용 가능하다.
//요소 접근
console.log(myString[3]); //대괄호 표기법
console.log(myString.charAt(3)); //charAt 메소드
//요소 탐색
console.log(myString.indexOf('a'));
console.log(myString.lastIndexOf('i'));

//대소문자 변환
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

//양 끝 공백 제거
console.log(myString.trim());

//부분 문자열 접근(slice(start, end)); - 배열과 동일원리
console.log(myString.slice(0, 2)); //0부터 1번 인덱스까지 리턴임. end번 직전까지만!


