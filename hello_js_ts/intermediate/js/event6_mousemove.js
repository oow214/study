// mouse 이동 이해를 위한 파일

const box1 = document.querySelector('#box1');

function onMouseMove(e) {
  console.log(`client: (${e.clientX}, ${e.clientY})`);
  console.log(`page: (${e.pageX}, ${e.pageY})`);
  console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
  console.log('------------------------------------');
}

box1.addEventListener('mousemove', onMouseMove);