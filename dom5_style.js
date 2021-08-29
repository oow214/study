// 스타일 다루기
// 태그에 직접 사용보다는 js로 적용하기 권장.
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// elem.classList: add, remove, toggle
// 클래스 속성 값을 유사배열로 다루는 프로퍼티
// 추가, 삭제, 있으면 제거 없으면 추가
const item = tomorrow.children[1];
item.classList.add('done', 'other'); //여러 개 전달 가능, 같은 코드 두 번 적용해도 한 번만 적용됨.
item.classList.remove('done'); //add와 같다.
item.classList.toggle('done'); //여러 개 적용 X, 두 번째 파라미터에 boolean 값 받고 true면 add, false면 remove 기능만 함.

// elem.className - done 클래스에 작성한 스타일이 입혀짐.
// 단, 클래스 속성 값 전체가 바뀜. 기존 클래스가 사라짐.
today.children[1].className = 'done';

// style 프로퍼티
// 태그에 직접적으로 값이 적용돼 스타일 우선순위 높아지고 비슷한 코드 여러 개 작성해야함.
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = '#DDDDDD';