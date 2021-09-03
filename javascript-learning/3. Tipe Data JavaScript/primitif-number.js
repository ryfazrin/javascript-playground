// Number
console.log("Number :");

var foo;

foo = 999;          // angka desimal
console.log(foo);   // 999

foo = 0b1111100111; // angka biner with 0b...
console.log(foo);   // 999

foo = 01747;        // angka oktal
console.log(foo);   // 999

foo = 0o1747;       // angka oktal with 0o...
console.log(foo);   // 999

foo = 0x3E7;        // angka Heksadesimal
console.log(foo);   // 999

// NaN and Infinity
console.log("NaN and Infinity (NaI) : ");

var nai;

nai = 9 * "a";
console.log(nai); // NaN

nai = 5 / 0;
console.log(nai); // Infinity

nai = -5 / 0;
console.log(nai); // -Infinity

// Kesalahan dalam pembulatan Tiper Data Number
var round;

round = 0.1 + 0.2;  // seharusnya 0.3
console.log(round); // 0.30000000000000004