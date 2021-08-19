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

