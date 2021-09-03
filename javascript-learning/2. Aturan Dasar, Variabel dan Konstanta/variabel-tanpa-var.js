/**
 * contoh sederhana
 * Menggunakan variabel tanpa var adalah kebiasaan buruk (deprecated)
 */
// angka = 19213;
// console.log(angka);

/**
 * Mengenal Strict Mode
 * code : "use strict";
 * Untuk "memaksa programmer" menghentikan kebiasaan ini (tapi tidak mewajibkan),
 * JavaScript memiliki mode pilihan dengan aturan yang lebih ketat, yakni Strict Mode. Fitur ini hadir di ECMAScript 5.
 * 
 * contoh :
 */

"use strict";
var hargaBarang = 12000;
var ongkosKirim = 5000;
var totalBiaya = hargaBarang + ongkosKirim;

var pajak = 10/100 * totalBiaya;

tb = totalBiaya + pajak;

console.log(tb); // error : ReferenceError: tb is not defined