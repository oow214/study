//DOM
console.log(document);
console.log(typeof document);
//console.dir(document);

//DOM트리 탐색
const myTag = document.querySelector('#list-1');

console.log(myTag);

// 형제 요소 노드
console.log(myTag.previousElementSibling); //이전형제
console.log(myTag.nextElementSibling); //다음형제

// 부모 요소 노드
console.log(myTag.parentElement); //부모요소노드 접근

// 자식 요소 노드
console.log(myTag.children[1]); //해당 요소의 자식 요소를 담고있다.
console.log(myTag.firstElementChild); //해당 요소의 첫 번째 요소노드
console.log(myTag.lastElementChild); //해당 요소의 마지막 요소노드

console.log(myTag.nextElementSibling.firstElementChild); //다음형제의 첫 번째 요소노드


//요소 노드 프로퍼티
// textContext
console.log(myTag.textContent);

// outerHTML
console.log(myTag.outerHTML);

// innerHTML
console.log(myTag.innerHTML);
myTag.innerHTML += '<li>HI!!</li>';

