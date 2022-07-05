// 이벤트 객체 (Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

function printEvent(event) {
  console.log(event); // 콘솔창에 event 객체가 출력된다. 
  // type(이벤트 타입)과 target(이벤트를 담은 해당 요소 - DOM요소가 담겨있다.)이 자주 사용됨.
	event.target.style.color = 'red'; // 이벤트 발생 시 해당 요소 수정 가능.
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);