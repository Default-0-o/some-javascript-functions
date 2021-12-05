exports.poetry = (input) => {
	verses = [
		"شکستن خاطری در سینه‌ای تنگ  نهادن گوهر و برداشتن سنگ",
		"بنام زندگی هر لحظه مردن  بجای آب و نان، خونابه خوردن",
		"که من گنجم، چو خاکم پست مشمار  مرا زین خاکدان تیره بردار",
		"مرا افتادگی آزادگی داد  نیفتاد آنکه مانند من افتاد",
		"نهان در خانهٔ دل، رهزنانند  که دائم در کمین عقل و جانند",
		"هراس راه و بیم رهزنم نیست  که دیناری بدست و دامنم نیست",
		"از تو میخواهم که با من خو کنی  بعد ازین کردار خود نیکو کنی",
		"یکدل ار گردیم در سود و زیان  این شکایت‌ها نیاید در میان",
		"درزی ایام را اندازه نیست  جور و بد کاریش، کاری تازه نیست",
		"چرخ و انجم، هستی ما میبرند  ما نمی‌بینیم و ما را میبرند",
		"ره نمی‌پرسیم، اما میرویم  تا که نیروئیست در پا، میرویم",
	];

	let verseBeginners = input.split("  ");
	let acceptedVerse = null;
	console.log(verseBeginners);
	verses.map((item) => {
		if (
			item.charAt(0) === verseBeginners[1].charAt(verseBeginners[1].length - 1)
		) {
			acceptedVerse = item;
		}
	});
	verses.map((item) => {
		if (
			item.charAt(0) === verseBeginners[0].charAt(verseBeginners[0].length - 1)
		) {
			acceptedVerse = item;
		}
	});

	return acceptedVerse;
};
