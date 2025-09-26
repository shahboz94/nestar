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
