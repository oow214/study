/*
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

//while문
let i = 30;
while (i % 7 !== 0) {
    i++;
}

console.log(i);
*/

//break와 continue
let i = 1;
while (i <= 10) {
    if (i === 7) {
        break;
    } else if (i % 2 === 0) {
        i++; //만약 증가해주지 않으면 i가 2인채로 무한히 반복한다.
        continue;
    }
    console.log(i);
    i++;
}






