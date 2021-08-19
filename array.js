//배열 (Array)
//배열의 값들은 요소(element)라함.
//index == PropertyName
let yeonwoo = [
    "김연우", "KimYeonwoo", "oow214"
];

//indexing - 배열 요소에 인덱스로 접근 (0부터 시작)
console.log(yeonwoo[0]);
console.log(yeonwoo[0+2]);

//length - 배열이 갖고있는 요소의 총 개수
console.log(yeonwoo.length);
console.log(yeonwoo['length']);
console.log(yeonwoo[yeonwoo.length - 1]); //배열의 마지막 요소 접근

//배열에 요소 추가, 변수처럼 추가하면 됨. (수정도 같다.)
yeonwoo[5] = "cuteYeonwoo";
console.log(yeonwoo[5]);
console.log(yeonwoo); //인덱스 넘으면 추가는 되지만 중간 값들은 empty 처리됨.

//배열 값 삭제
console.log(yeonwoo);
delete yeonwoo[1];
console.log(yeonwoo); //empty 처리됨.

//배열 메소드 활용
//splice - 배열 값 삭제
// yeonwoo.splice(1);
// console.log(yeonwoo);
//단, 1번 인덱스 이후의 모든 요소들이 모두 삭제된다.

yeonwoo.splice(1, 1); //두 번째 인자에 삭제할 개수 설정.

//splice(startIndex, [deleteCount], [item])
yeonwoo.splice(2, 2, 'yeonwooZZang', 'yeonwooGood');
console.log(yeonwoo);


//배열의 첫 요소 삭제
yeonwoo.splice(0, 1);
yeonwoo.shift();

//배열의 마지막 요소 삭제
yeonwoo.splice(yeonwoo.length - 1, 1);
yeonwoo.pop();

//배열의 첫 요소로 값 추가
yeonwoo.splice(0, 0, 'prettyYeonwoo');
yeonwoo.unshift('prettyYeonwoo');

//배열의 마지막 요소로 값 추가
yeonwoo.splice(yeonwoo.length, 0, 'HiYeonwoo');
yeonwoo.push(HiYeonwoo);


