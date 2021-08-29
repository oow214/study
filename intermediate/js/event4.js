// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

// event.preventDefault
// url 이동 제한
link.addEventListener('click', function(e) {
	e.preventDefault();
	alert('지금은 이동할 수 없습니다.');
});

// 체크박스 후 텍스트 작성 가능
input.addEventListener('keydown', function(e) {
	if (!checkbox.checked) {
		e.preventDefault();
		alert('체크박스를 먼저 체크해 주세요.');
	}
});

// 마우스 우클릭 방지
document.addEventListener('contextmenu', function(e) {
	e.preventDefault();
	alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
});

