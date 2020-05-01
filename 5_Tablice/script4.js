//ZAD 4

let sum = 0;
let tab = [3, 4, 5, 6, 9, 14, 34, 25, 67, 88];

for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
        sum += tab[i];
    }
}
console.log(sum);