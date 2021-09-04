/**
 * pre-increment  : ++a
 * post-increment : a++
 * pre-decrement  : --a
 * post-decrement : a--
 */
var foo;

foo = 7;
console.log(++foo); // 8
console.log(foo);   // 8

foo = 7;
console.log(foo++); // 7
console.log(foo);   // 8

foo = 7;
console.log(--foo); // 6
console.log(foo);   // 6

foo = 7;
console.log(foo--); // 7
console.log(foo);   // 6