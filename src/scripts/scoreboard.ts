type Points = {
	[key: number]: number,
}

//@ts-ignore
function setupEventListener(points: Points) {
	document.getElementById("x1p1")!.addEventListener("click", () => recalc(1, 1, points));
	document.getElementById("x1p2")!.addEventListener("click", () => recalc(2, 1, points));
	document.getElementById("x2p1")!.addEventListener("click", () => recalc(1, 2, points));
	document.getElementById("x2p2")!.addEventListener("click", () => recalc(2, 2, points));
	document.getElementById("x3p1")!.addEventListener("click", () => recalc(1, 3, points));
	document.getElementById("x3p2")!.addEventListener("click", () => recalc(2, 3, points));

	document.getElementById("pointsp1")!.textContent = points[1]!.toString();
	document.getElementById("pointsp2")!.textContent = points[2]!.toString();
}

function recalc(player: number, times: number, points: Points) {
	const input = document.getElementById("pta" + player) as HTMLInputElement;
	const output = document.getElementById("pointsp" + player) as HTMLSpanElement;
	for (let i = 0; i < times; i++) {
		points[player]! += wordToPoints(input.value);
	}
	output.textContent = points[player]!.toString();
	input.value = "";
}

function wordToPoints(word: string) {
	let points: number = 0;
	word = word.toUpperCase();
	if (!isNaN(parseInt(word))) {
		points = parseInt(word);
	} else {
		for (let i: number = 0; i < word.length; i++) {
			let c: string = word[i]!;
			if (c == 'E' || c == 'N' || c == 'S' || c == 'I' || c == 'R' || c == 'T' || c == 'U' || c == 'A' || c == 'D') {
				points += 1;
			} else if (c == 'H' || c == 'G' || c == 'L' || c == 'O') {
				points += 2;
			} else if (c == 'M' || c == 'B' || c == 'W' || c == 'Z') {
				points += 3;
			} else if (c == 'C' || c == 'F' || c == 'K' || c == 'P') {
				points += 4;
			} else if (c == 'Ä' || c == 'J' || c == 'Ü' || c == 'V') {
				points += 6;
			} else if (c == 'Ö' || c == 'X') {
				points += 8;
			} else if (c == 'Q' || c == 'Y') {
				points += 10;
			} else {
				continue;
			}
		}
	}

	return points;
}
