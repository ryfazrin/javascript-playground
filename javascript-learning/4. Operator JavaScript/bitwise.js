/**
 * Bitwise
 * 
 * Operator khusus untuk menangani operasi logika bilangan biner.
 */

var a = 0b10101010; // desimal 170
var b = 0b11011110; // desimal 222

console.log(a);
console.log(b);

var foo;

foo = a & b;
console.log(foo);

foo = a | b;
console.log(foo);

foo = a ^ b;
console.log(foo);

foo = ~a;
console.log(foo);

foo = a >> 2;
console.log(foo);

foo = a << 3;
console.log(foo);