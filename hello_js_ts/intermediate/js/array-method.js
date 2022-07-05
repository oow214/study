// forEach
const numbers = [1, 2, 3];

numbers.forEach((element, index, array) => {
  console.log(element);// 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});


// map
const numbers = [1, 2, 3];
const twiceNumbers = numbers.map((element, index, array) => {
  return element * 2;
});

console.log(twiceNumbers);// (3) [2, 4, 6]



// filter
const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'SurfacePro', brand: 'Microsoft'},
  {name: 'ZenBook', brand: 'Asus'},
  {name: 'MacbookAir', brand: 'Apple'},
];

const apples = devices.filter((element, index, array) => element.brand === 'Apple');

console.log(apples);
// (2) [{name: "MacbookPro", brand: "Apple"}, {name: "MacbookAir", brand: "Apple"}]

const apples = devices.filter((element, index, array) => element.name=== 'Gram');

// console.log(myLaptop); // 항상 리턴값이 배열임.
console.log(...myLaptop);



// find
const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'SurfacePro', brand: 'Microsoft'},
  {name: 'ZenBook', brand: 'Asus'},
  {name: 'MacbookAir', brand: 'Apple'},
];

const myLaptop = devices.find((element, index, array) => {
  console.log(index);// 콘솔에는 0, 1, 2까지만 출력됨.return element.name === 'Gram';
});

console.log(myLaptop);// {name: "Gram", brand: "LG"}



// some
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((element, index, array) => {
  console.log(index);  // 콘솔에는 0, 1, 2, 3까지만 출력됨.
	return element > 5;
});

console.log(someReturn);// true;


// every
const numbers = [1, 3, 5, 7, 9];

// every: 모든 요소가 조건을 만족하는지
// every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((element, index, array) => {
  console.log(index);  // 콘솔에는 0까지만 출력됨.
	return element > 5;
});

console.log(everyReturn);// false;


// reduce
const numbers = [1, 2, 3, 4];

numbers.reduce((acc, el, i, arr) => { 
	return nextAccValue;
}, initialAccValue);

// reduce
const sumAll = numbers.reduce((accumulator, element, index, array) => {
  return accumulator + element;
}, 0);

console.log(sumAll);// 10


// sort
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters);// (5) ["A", "B", "C", "D", "E"]
console.log(numbers);// (5) [1, 10, 21, 36000, 4]



// reverse
const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters);// (3) ["b", "c", "a"]console.log(numbers);// (3) [353, 721, 421]