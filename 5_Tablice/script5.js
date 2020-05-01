//ZAD 5
let max = 0;
let tab = [3, 4, 5, 6, 9,];

//for (var i = 0; i < tab.length; i++) {
if (tab[0] > tab[1] && tab[0] > tab[2] && tab[0] > tab[3] && tab[0] > tab[4]) {
    max = tab[0]
} 
else if (tab[1] > tab[0] && tab[1] > tab[2] && tab[1] > tab[3] && tab[1] > tab[4]) {
    max = tab[1]
} 
else if (tab[2] > tab[0] && tab[2] > tab[1] && tab[2] > tab[3] && tab[2] > tab[4]) {
    max = tab[2]
}
else if (tab[3] > tab[0] && tab[3] > tab[1] && tab[3] > tab[2] && tab[3] > tab[4]) {
    max = tab[3]
}
else { max = tab[4] }

console.log(max);
