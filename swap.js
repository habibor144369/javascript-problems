// value swapinng.....
var a = 20;
var b = 30;
console.log("befor swap: a =", a,"b =", b);
var temporary = a;
var a = b;
var b = temporary;
console.log("after swap: a =", a,"b =", b);

//2nd method of swaping..
var x = 10;
var y = 20;
console.log("befor swap: x =", x,"y =", y);
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x =", x,"y =", y);

//3 3rd methode 
var p = 20;
var q = 10;
console.log("befor swap: p =", p,"q =", q);
[p, q] = [q, p];
console.log("after swap: p =", p,"q =", q);