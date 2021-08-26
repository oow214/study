// 노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 삭제하기: Node.remove()
tomorrow.remove();
today.children[2].remove(); // 오늘 할 일의 세 번째 노드 삭제

// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]);

tomorrow.children[1].after(today.children[1]); //다양한 방법으로 요소 노드 이동 가능
tomorrow.children[2].before(today.children[1]); //본인이 생각해서 요소 노드 활용하기
tomorrow.lastElementChild.before(today.children[1]);