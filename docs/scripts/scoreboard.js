//@ts-ignore
function setupEventListener(points) {
    document.getElementById("x1p1").addEventListener("click", () => recalc(1, 1, points));
    document.getElementById("x1p2").addEventListener("click", () => recalc(2, 1, points));
    document.getElementById("x2p1").addEventListener("click", () => recalc(1, 2, points));
    document.getElementById("x2p2").addEventListener("click", () => recalc(2, 2, points));
    document.getElementById("x3p1").addEventListener("click", () => recalc(1, 3, points));
    document.getElementById("x3p2").addEventListener("click", () => recalc(2, 3, points));
    document.getElementById("pointsp1").textContent = points[1].toString();
    document.getElementById("pointsp2").textContent = points[2].toString();
}
function recalc(player, times, points) {
    const input = document.getElementById("pta" + player);
    const output = document.getElementById("pointsp" + player);
    for (let i = 0; i < times; i++) {
        points[player] += wordToPoints(input.value);
    }
    output.textContent = points[player].toString();
    input.value = "";
}
function wordToPoints(string) {
    let int = 0;
    string = string.toUpperCase();
    if (!isNaN(parseInt(string))) {
        int = parseInt(string);
    }
    else {
        for (let i = 0; i < string.length; i++) {
            let c = string[i];
            if (c == 'E' || c == 'N' || c == 'S' || c == 'I' || c == 'R' || c == 'T' || c == 'U' || c == 'A' || c == 'D') {
                int += 1;
            }
            else if (c == 'H' || c == 'G' || c == 'L' || c == 'O') {
                int += 2;
            }
            else if (c == 'M' || c == 'B' || c == 'W' || c == 'Z') {
                int += 3;
            }
            else if (c == 'C' || c == 'F' || c == 'K' || c == 'P') {
                int += 4;
            }
            else if (c == 'Ä' || c == 'J' || c == 'Ü' || c == 'V') {
                int += 6;
            }
            else if (c == 'Ö' || c == 'X') {
                int += 8;
            }
            else if (c == 'Q' || c == 'Y') {
                int += 10;
            }
            else {
                continue;
            }
        }
    }
    return int;
}
