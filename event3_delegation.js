// 이벤트 위임 (Event Delegation)
const list = document.querySelector('#list');

// for (let item of list.children) { // 새 이벤트 생성 시 적용이 되지 않음.
//   item.addEventListener('click', function(e) {
//     e.target.classList.toggle('done');
//   })
// }

// 부모 요소의 event에 핸들러 한 개만 등록해도 자식 요소에 모두 적용됨.
// event 버블링 이용
// tagName은 요소의 태그 이름값을 대문자로 담음
// cconstains는 파라미터로 전달하는 값이 해당 요소의 클래스 속성에 있는지 확인해서 불린으로 리턴
list.addEventListener('click', function(e) { 
	// if (e.target.tagName === 'LI')
	if (e.target.classList.contains('item')) { //if문으로 다른 자식 요소와 구분하기
		e.target.classList.toggle('done');
	}
});

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);
li.addEventListener('click', function(e) {
  e.stopPropagation();
});