//ZAD 5B

let max = 0;
let tab = [3, 4, 5, 6, 9, 14, 7, 28, 76, 39, 50, 44];
tab[0] = max;

for (let i = 0; i < tab.length; i++) {
    if (max <= tab[i]) {
        max = tab[i]
    }
}
console.log(max);
