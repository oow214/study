//할당연산자(Assignment operators)
let name = 'Yeownoo';
//let x = 5;
//x = x - 2;
//=은 값을 대입하는, 할당하는 연산자이다.

//옵셔널 파라미터
function sayHello(name, age, nationality = "대한민국") {
    console.log(`안녕하세요 저는 ${name}입니다.`);
    console.log(`나이는 ${age}입니다.`);
    console.log(`국적은 ${nationality}입니다.`)
};

sayHello("Yeonwoo", "68", "경기도"); //값을 모두 전달한 경우
sayHello("Yeonwoo", "68"); //파라미터 값을 생략한 경우

//Scpoe
let x = 3; //글로벌 변수, 전역 번수(Global Variable)

function myFunction() { //블록문(Block Statement) - {}로 감싼 코드
    let y = 5;  //로컬 변수 , 지역 변수(Local Variable) - 블록문 안에서만 사용 가능
    //console.log(x);   //전역에서 선언된걸 갖고온거라 아래에서 또 선언 시 오류남.
    console.log(y);

    let x = 5; //블록문 내에서 변수 사용 시 로컬에 변수가 있는지 확인 후 없으면 글로벌 변수 확인함.
    console.log(x);
};

myFunction();
console.log(x);

//상수(constant)
const PI = 3.14;
let radius = 0;

//원의 넓이 계산
function calculateArea() {
    return PI * radius * radius;
};

//반지름에 따른 원의 넓이 출력
function printArea() {
    return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());