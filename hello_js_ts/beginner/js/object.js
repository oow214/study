//객체(object)
let yeonwoo =  {
    name: "Yeonwoo",
    birth: 20020214,
    job: null,
    'my love': {
        cake: "초코케이크",
        cookie: "버터쿠키"
    }
}

console.log(typeof yeonwoo);


//점 표기법 (objectName.propertyName)
console.log(yeonwoo.birth);

//대괄호 표기법 (objectName['propertyName'])
console.log(yeonwoo['my love']);
console.log(yeonwoo['my' + ' love']);

let love = 'my love';
console.log(yeonwoo[love]);


//객체 수정 
console.log(yeonwoo.name);
yeonwoo.name = "연우"; //변수 수정처럼 하면 된다.
console.log(yeonwoo.name);

//객체 추가
console.log(yeonwoo.email); //undefined
yeonwoo.email = "oow214@gmail.com"; //존재하지 않는 프로퍼티에 새 값을 할당 시 프로퍼티 추가됨.
console.log(yeonwoo.email); //oow214@gmail.com

//객체 삭제
console.log(yeonwoo.job); //null
delete yeonwoo.job;
console.log(yeonwoo.job); //undefined


//in 연산자 'propertyName' in object
console.log(yeonwoo.name !== undefined); //undefined를 통해 존재 여부 확인
console.log('name' in yeonwoo);
//실수 또는 다른 함수나 변수에 의해 undefined 값이 할당되기도 한다.
//위와 같은 경우를 대비해 안전하게 프로퍼티 값 확인을 위해서 in 사용하기
//if문 응용도 가능하다.



//객체의 메소드 (Method)
let hello = {
    sayHello: function() {   //함수 이름 설정 없이 바로 설정, 함수 이름은 프로퍼티 네임이 대신해준다.
        console.log("Hello!"); 
    },
    sayHi: function(name) {
        console.log(`${name} Hi!`);
    }
}

hello.sayHello();
hello.sayHi("Yeonwoo");

hello['sayHello']();
hello['sayHi']('Yeonwoo');


//for..in
for (let k in yeonwoo) {
    console.log(`${k}: ${yeonwoo[k]}`);
    
}


//내장객체 - date
//let myDate = new Date();
//console.log(myDate); //객체를 생성한 시간이 출력됨

//new Date(milliseconds)
let myDate = new Date(1000);
console.log(myDate);

//new Date('YYYY-MM-DD')
let myDate1 = new Date('2021-02-14');
console.log(myDate1);

//new Date('YYYY-MM-DDThh:mm:ss')
let myDate2 = new Date('2021-02-14T14:14:00');
console.log(myDate2);

//new Date(YYYY, MM, DD, hh, mm, ss, ms)
//년, 월 필수이며 나머진 생략 가능.
//month는 시작 숫자가 0이다. 1월은 0월이다.
let YeonwooDate = new Date(2020, 1);
console.log(YeonwooDate);

//Date는 일자, Day는 요일
//요일은 일요일 시작, 0부터 6까지
console.log(myDate2.getFullYear());
console.log(myDate2.getMonth());
console.log(myDate2.getDate());
console.log(myDate2.getHours());
console.log(myDate2.getMinutes());
console.log(myDate2.getSeconds());
console.log(myDate2.getMilliseconds());


