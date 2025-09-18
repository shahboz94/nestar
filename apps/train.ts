// TASK ZK:
function printNumbers() {
	let num = 1;
	const interval = setInterval(() => {
		console.log(num);
		if (num === 5) {
			clearInterval(interval); // 5 chiqqach to‘xtaydi
		}
		num++;
	}, 1000); // har 1 soniyada ishlaydi
}

printNumbers();

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin

// MASALAN: printNumbers();
