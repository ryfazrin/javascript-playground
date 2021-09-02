var tombol = document.getElementById('tombol');
var hasil = document.getElementById('hasil');

function hello() {
    hasil.innerHTML = "Hello dari external javascript";
}

tombol.addEventListener("click", hello);