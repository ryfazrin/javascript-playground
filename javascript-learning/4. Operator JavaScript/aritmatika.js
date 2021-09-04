var foo;

foo = +100;
console.log(foo); // 100

foo = -22;
console.log(foo); // -22

foo = 30 + 5;
console.log(foo); // 35

foo = 3.33 + 9.02;
console.log(foo); // 12.35

foo = 9 * 7;
console.log(foo); // 63

foo = 6 + 8 / 2 + 6;
console.log(foo); // 16

foo = 30 % 7;
console.log(foo); // 2


// Urutan 'kekuatan' operator juga pengaruh di sini. 

foo = 4 + 6 / 5 - 3 * 2 + 3;
console.log(foo); // 2.2

foo = (4 + 6) / (5 - 3) * 2 + 3;
console.log(foo); // 13

/**
 * pembacaan yang lebih jelas
 * 
 */

foo = 10 / 5 + 4.5;
console.log(foo); // 6.5

foo = (10 / 5) + 4.5;
console.log(foo); // 6.5