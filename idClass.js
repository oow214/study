//id로 태그선택
const myTag = document.getElementById('btns');
console.log(myTag);

//class로 태그선택
const myTags = document.getElementsByClassName('color-btn');
console.log(myTags);
console.log(myTags[1]); //1번 인덱스에 접근
console.log(myTags.length);

for (let tag of myTags) {
  console.log(tag);
}

//css 선택자로 태그 선택
const myTag1 = document.querySelector('#myNumber');
console.log(myTag1);
const myTag2 = document.querySelector('myNumber');
console.log(myTag2);

const myTag3 = document.querySelector('.color-btn'); //가장 첫 번째 태그 선택됨.
const myTag4 = document.querySelectorAll('.color-btn'); //NodeList라는 유사배열 출력.


//이벤트(Event)핸들러 등록
//자바스크립트로 해당 DOM 객체의 onclick 프로퍼티에 등록하기
const btn = document.querySelector('#myBtn');

btn.onclick = function() {
  console.log('Hello Yeonwoo!');
}















