const box2 = document.querySelector('#box2');

function printEventData(e) {
  console.log('event:', e.type);
  console.log('target:', e.target);
  console.log('relatedTarget:', e.relatedTarget);
  console.log('------------------------------------');
  if (e.target.classList.contains('cell')) {
    e.target.classList.toggle('on'); //toggle 활용할 수 있다.
  }
}

box2.addEventListener('mouseover', printEventData);
box2.addEventListener('mouseout', printEventData);