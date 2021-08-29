// 이벤트 등록하기
let btn = document.querySelector('#myBtn');

// onclick 사용 시 기존 값 덮어쓴다. 
// 여러 핸들러 사용 불가, 기존 값 사용 불가라는 단점이 있음.
// btn.onclick = function () {
// 	console.log('Hi Yeonwoo!');
// };

function event1() {
	console.log('Hi Yeonwoo!');
}

function event2() {
	console.log('Hi again!');
}

// elem.addEventListener(event, handler) - 가장 권장됨.
btn.addEventListener('click', event1); // event1()로 하면 함수를 호출해서 등록이 안 됨. 함수 이름만 적기 !
btn.addEventListener('click', event2);

// elem.removeEventListener(event, handler)
btn.removeEventListener('click', event2); // event2 삭제됨. 


btn.addEventListener('click', function() {
  console.log('event3!');
});

btn.removeEventListener('click', function() {
  console.log('event3!');
}); // 같은 내용이지만 다른 함수이므로 삭제되지 않는다.
// 삭제를 해야하는 경우라면 외부에 함수 호출 후 사용해야한다.