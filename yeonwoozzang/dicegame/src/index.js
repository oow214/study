import ReactDOM from 'react-dom';

const product = 'Macbook';
const imageUrl = 'https://upload';

function handleClick() {
  alert('곧 도착합니다!');
}

ReactDOM.render(
  <>
    <h1>나만의 {product.toUpperCase()} 주문하기</h1>
    <img src={imageUrl} alt="제품 사진" />
    <button onClick={handleClick}>확인</button>
  </>,
  document.getElementById('root')
);

