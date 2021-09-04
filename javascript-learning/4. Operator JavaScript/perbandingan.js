var foo;


// with Number
console.log("Number :");

foo = 9 < 12;
console.log(foo); // true

foo = 5 < 5;
console.log(foo); // false

foo = 5 <= 5;
console.log(foo); // true

foo = 8 != 12;
console.log(foo); // true

foo = 15 == 12;
console.log(foo); // false

foo = 15 === 15;
console.log(foo); // true

foo = 0.3 === 3e-1;
console.log(foo); // true


// with String
console.log("String : ");

foo = 'a' < 'b';
console.log(foo); // true

foo = 'a' < 'A';
console.log(foo); // false

foo = 'reva' < 'revika';
console.log(foo); // true

foo = false < true;
console.log(foo); // true

foo = 'joni' == 12;
console.log(foo); // false


// Perbedaan == dan ===
console.log("Perbedaan == dan === : ");

foo = 9 == '9';
console.log(foo); // true

foo = 9 === '9';
console.log(foo); // false

foo = true == 1;
console.log(foo); // true

foo = true === 1;
console.log(foo); // false

foo = false == 0;
console.log(foo); // true

foo = false === 0;
console.log(foo); // false


/**
 * Falsy dan Truthy value
 * 
 * Falsy : Hasil konversi perbandingan menjadi false
 * Truthy : Hasil konversi perbandingan menjadi true
 */
console.log("Falsy dan Truthy value");
// ...