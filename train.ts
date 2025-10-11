// TASK ZS:
function singleNumber(arr) {
	const result = arr.reduce((acc, num) => acc ^ num, 0);
	console.log(result);
	return result;
}

singleNumber([4, 2, 1, 2, 1]);

// Shunday function yozing, bu function parametrdagi array ichida
// bir marotaba takrorlangan element'ni qaytarsin

// MASALAN: singleNumber([4, 2, 1, 2, 1]); return 4;

/**
 // TASK ZR:

function countNumberAndLetters(str) {
	const number = (str.match(/[0-9]/g) || []).length;
	const letter = (str.match(/[a-zA-Z]/g) || []).length;

	const result = { number, letter };
	console.log(result);
	return result;
}

countNumberAndLetters('string152%¥');
countNumberAndLetters('abc123XYZ');
countNumberAndLetters('!@#$%^&*()');

// Shunday function yozing, bu function,
// berilgan parametr string tarkibidagi raqam va sonlarni
// sanab object sifatida qaytarsin.

// MASALAN: countNumberAndLetters(“string152%\¥”); return {number: 3, letter: 6};

**/
/**

// TASK ZQ:
function findDuplicates(arr: number[]): number[] {
	const result = arr
		.filter((num, i) => arr.indexOf(num) !== i)
		.filter((num, i, dupnum) => dupnum.indexOf(num) === i)
		.sort((a, b) => a - b);

	console.log(result);
	return result;
}

findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]); // [3, 4]

// Shunday function yozing, bu function berilgan array parametr
// ichida ikki marotaba yoki undan ko'p takrorlangan sonlarni alohida
// array'da yagonadan qaytarsin qaytarsin.

// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]); return [3, 4];

**/
/**

function areArraysEqual(arr1: any[], arr2: any[]): boolean {
	const sortedArr1 = arr1.every((el) => arr2.includes(el));

	console.log(sortedArr1);
	return sortedArr1;
}

// Shunday function yozing, u 2 ta array parametr qabul qilsin.
// Siz bu ikki arrayning qiymatlari o'xshash bo'lishini
// (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// MASALAN:
areArraysEqual([1, 2, 3], [3, 1, 2, 1, 1, 1]);
areArraysEqual([1, 2, 3], [3, 1, 2]); // true
areArraysEqual([1, 2, 3], [3, 1, 2, 1]); // true
areArraysEqual([1, 2, 3], [4, 1, 2]); // false

**/
/**
  

// TASK ZP:

// function Balanced(input: string): void {
//   let balance = 0;
//   let i = 0;

//   while (i < input.length) {
//     const char = input[i];

//     if (char === '(') {
//       balance++;
//     } else if (char === ')') {
//       balance--;
//       if (balance < 0) {
//         console.log(false);
//         return;
//       }
//     }
//     i++;
//   }

//   console.log(balance === 0);
// }

// Balanced('string()ichida(qavslar)soni()balansda');

// Balanced('string(ichida(qavslar))soni)(');

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin.
//  Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true


**/
/**

//TASK ZO:

function areArraysEqual(arr1: any[], arr2: any[]): boolean {
	const sortedArr1 = arr1.every((el) => arr2.includes(el));
	console.log(sortedArr1);
	return sortedArr1;
}

areArraysEqual([1, 2, 3], [3, 1, 2]);
areArraysEqual([1, 2, 3], [3, 1, 2, 1, 1, 1]);
areArraysEqual([1, 2, 3, 4], [4, 1, 2, 3]);
areArraysEqual([1, 2, 3, 4], [1, 5, 2, 3]);

// Shunday function yozing, u 2 ta array parametr qabul qilsin.
// Siz bu ikki arrayning qiymatlari o'xshash bo'lishini
// (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// MASALAN:
// areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
// areArraysEqual([1, 2, 3], [4, 1, 2]) // false

**/
/**

//TASK ZN:

function rotateArray(arr: number[], index: number): number[] {
	const len = arr.length;
	const rotated = arr.slice(len - index).concat(arr.slice(0, len - index));
	console.log(rotated);
	return rotated;
}

rotateArray([10, 20, 30, 40, 50, 60], 2);

// Shunday function yozing, uni array va number parametri bo'lsin.
// Function'ning vazifasi ikkinchi parametr'da berilgan raqam, birinchi
// array parametr'ning indeksi bo'yicha hisoblanib, shu indeksgacha bo'lgan
// raqamlarni indeksdan tashqarida bo'lgan raqamlar bilan o'rnini
// almashtirib qaytarsin.

**/
/**
 
// TASK ZM:

function reverseInteger(num: number): number {
	const reversed = num.toString().split('').reverse().join('');
	const result = parseInt(reversed, 10);
	console.log(result);
	return result;
}

reverseInteger(123456789);
reverseInteger(987654321);

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.

**/
/**

// TASK ZK:
function printNumbers() {
	let num = 1;
	const interval = setInterval(() => {
		console.log(num);
		if (num === 5) {
			clearInterval(interval);
		}
		num++;
	}, 1000);
}

printNumbers();

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin

// MASALAN: printNumbers();
 **/
