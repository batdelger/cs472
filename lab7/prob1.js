x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
    document.write(x); // undefined
    document.write(a); // 8 
    var f = function (a, b, c) {
        b = a;
        document.write(b); // 8
        b = c; 
        var x = 5;
    }
    f(a, b, c);
    document.write(b) //9;
    var x = 5;
}

c(8, 9, 10);
document.write(b); // 10
document.write(x); // 1