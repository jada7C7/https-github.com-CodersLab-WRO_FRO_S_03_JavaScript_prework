// zad2
let a = 3;
let b = 8;
let c = 8;
if (a > b && a > c) {
    alert("a jest wieksze od b i c")
}
else if (b > a && b > c) {
    alert("b jest wieksze od a i c")
}
else if (c > a && c > b) {
    alert("c jest wieksze od a i b")
}
else if (a = b && a > c && b > c) {
    alert("a jest równe b,  a oraz b są wiekszę od c ")
}
else if (a = c && a > b && c > b) {
    alert("a jest równe c, c oraz a są wiekszę od b ")
}
else if (b = c && b > a && c > a) {
    alert("b jest równe c, b oraz c są wiekszę od a ")
}
 else{
    alert("a, b, c są sobie równe")
 }


