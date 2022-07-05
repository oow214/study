const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; 

const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last); // 파라미터로 전달한 값을 메소드를 호출한 노드의 제일 마지막 자식 노드로

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before('문자열');  // 메소드를 호출한 노드의 뒤쪽(이전),
                           // 문자열 전달해도 자동으로 텍스트 노드가 생성되어서 추가됨.

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next, '안녕'); // 메소드를 호출한 노드의 앞쪽(다음)
                              // 값을 여러 개 전달 시 전달 순서대로 노드를 한번에 추가 가능