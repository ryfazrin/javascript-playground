var foo, bar, baz;

foo = "Sedang " + "Belajar " + "JavaScript";
console.log(foo);

foo = "Belajar " + "ECMAScript " + 7;
console.log(foo);

foo = 'Selamat ';
bar = "Malam ";
baz = `Indonesia`;
hasil = foo + bar + baz;
console.log(hasil);

var num;

num = 10 + 10 + 9;
console.log(num); // 29

num = '10' + 10 + 9;
console.log(num); // 10109

num = 10 + '10' + 9;
console.log(num); // 10109

num = 10 + 10 + '9';
console.log(num); // 209