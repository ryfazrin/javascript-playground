// String
console.log("String :");

var foo;

foo = "Hello World";
console.log(foo);

foo = 'Sedang belajar javascript';
console.log(foo);

foo = "199";
console.log(foo); // 199 is string

// mencampur penggunaan tanda kutip
foo = "Hari Jum'at";
console.log(foo);

foo = 'Dai berkata: "Sedang belajar Javascript"';
console.log(foo);

/**
 * penggunaaan tanda kutip yang error
 */
//  foo = 'Hari Jum'at'; // error !
//  foo = "Dai berkata: "Sedang belajar Javascript""; // error !

/**
 * SOLUSI
 * Escape Character
 * 
 * with backslash (\)
 */

foo = 'Hari Jum\'at';
console.log(foo);

foo = "Dai berkata: \"Sedang belajar Javascript\"";
console.log(foo);

foo = "Sedang\nBelajar\nJavascript";
console.log(foo);

// menulis karakter backslash itu sendiri
foo = "C: javascript\\variable\\string";
console.log(foo);

// backslash akan diabaikan apabila menggunakan huruf yang tidak spesial
foo = "\H\a\i";
console.log(foo);

// Unicode
foo = "J\u1EA3v\u1EB3\u1E68\u1E09\u1E2D\u1E57\u1E71";
console.log(foo);

var bar = "\u2665 Ryfazrin \u2764";
console.log(bar);

// Template String
console.log("Template String :");

foo = "Indonesia";
bar = `Selamat pagi ${foo}`;
console.log(bar);