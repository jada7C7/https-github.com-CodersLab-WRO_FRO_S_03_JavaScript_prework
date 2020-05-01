/*fvar firstIndex = 0;

var tab = [3, 4, 3, 4, 5, 7, 8, 5, 6, 9,];
//tab.sort();
/*for (var i = 0; i<tab.length; i++){
   for (j =0; j<tab.length; j++){
        if (tab[i] < tab[j])
        {
            var tmp = tab[i];
            tab[i] = tab[j];
            tab [j] = tmp;
        }
    }
}*/


let box = [9, 7, 9, 6, 4, 8, 3, 7, 4];
let firstIndex=-1;

for (let i = 0; i < box.length; i++) {
    for (let j = i + 1; j < box.length; j++) {
        if (box[i] === box[j]) {
            firstIndex = i;
            break;
        }
    }
    if (firstIndex > -1)
        break;
}
console.log(firstIndex);