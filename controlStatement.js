//if문
let temerature = 1;

if (temerature <= 0) {
    console.log('물이 업니다.');
} else if (temerature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.')
} else {
    console.log('물이 끓습니다.');
    if (temerature < 150) {
        console.log('물이 모두 수증기가 되었습니다.');
    }
}

//switch문
let myChoice = 2;
switch(myChoice) {
    case 1:
        console.log("고양이");
        break;
    case 2:
        console.log("강아지");
        break;
    default:
        console.log("참새");
}

//반복문 (loop statement)
//for문
for (let i = 1; i <= 10; i++) {
    console.log(`${i} 나는 귀엽다.`);
}

