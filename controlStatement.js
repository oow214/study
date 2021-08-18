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
