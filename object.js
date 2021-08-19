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