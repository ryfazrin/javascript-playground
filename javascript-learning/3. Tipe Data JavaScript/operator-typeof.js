/**
 * Operator typeof
 * biasanya digunakan untuk debugging (pencari kesalahan)
 */

var foo;
console.log(typeof foo); // undefined

foo = 199;
console.log(typeof foo); // number

foo = 0.0003;
console.log(typeof foo); // number

foo = "Belajar JavaScript";
console.log(typeof foo); // string

foo = `Hello Indonesia`;
console.log(typeof foo); // string

foo = false;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object