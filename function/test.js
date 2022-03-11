const changeWord = require('./function-01');
const checkTypeNumber = require('./function-02');
const checkEmail = require('./function-03');
const isValidPassword = require('./function-04');
const getSplitName = require('./function-05');
const getAngkaTerbesarKedua = require('./function-06');
const hitungTotalPenjualan = require('./function-07');
const getInfoPenjualan = require('./function-08');

// Testing
// Function 01
const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';
console.log('// Function 01');
console.log(changeWord('mencintai', 'membenci', kalimat1));
console.log(changeWord('bromo', 'semeru', kalimat2));

// Function 02
console.log('\n// Function 02');
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber('3'));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber());

// Function 03
console.log('\n// Function 03');
console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkEmail(3322));
console.log(checkEmail(1));

// Function 04
console.log('\n// Function 04');
console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());

// Function 05
console.log('\n// Function 05');
console.log(getSplitName('Aldi Daniela Pranata'));
console.log(getSplitName('Dwi Kuncoro'));
console.log(getSplitName('Aurora'));
console.log(getSplitName('Aurora Aurelliya Sukma Darma'));
console.log(getSplitName(0));

// Function 06
console.log('\n// Function 06');
const dataAngka = [9,4,7,7,4,3,2,2,8];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua('9,4,7,8,2,2'));
console.log(getAngkaTerbesarKedua());

// Function 07
const dataPenjualanPakAldi = [
    {
        'namaProduct': 'Sepatu Futsal Nike Vapor Academy 8',
        'hargaSatuan': 760000,
        'kategori': 'Sepatu Sport',
        'totalTerjual': 90,
    },
    {
        'namaProduct': 'Sepatu Warrior Tristan Black Brown High',
        'hargaSatuan': 960000,
        'kategori': 'Sepatu Sneaker',
        'totalTerjual': 37,
    },
    {
        'namaProduct': 'Sepatu Warrior Tristan Maroon High',
        'hargaSatuan': 360000,
        'kategori': 'Sepatu Sneaker',
        'totalTerjual': 90,
    },
    {
        'namaProduct': 'Sepatu Warrior Rainbow Tosca Corduroy',
        'hargaSatuan': 120000,
        'kategori': 'Sepatu Sneaker',
        'totalTerjual': 90,
    },
];
console.log('\n// Function 07');
console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

// Function 08
const dataPenjualanNovel = [
    {
        'idProduct': 'BOOK002421',
        'namaProduk': 'Pulang - Pergi',
        'penulis': 'Tere Liye',
        'hargaBeli': 60000,
        'hargaJual': 86000,
        'totalTerjual': 150,
        'sisaStok': 17,
    },
    {
        'idProduct': 'BOOK002351',
        'namaProduk': 'Selamat Tinggal',
        'penulis': 'Tere Liye',
        'hargaBeli': 75000,
        'hargaJual': 103000,
        'totalTerjual': 171,
        'sisaStok': 20,
    },
    {
        'idProduct': 'BOOK002941',
        'namaProduk': 'Garis Waktu',
        'penulis': 'Fiersa Besari',
        'hargaBeli': 67000,
        'hargaJual': 99000,
        'totalTerjual': 213,
        'sisaStok': 5,
    },
    {
        'idProduct': 'BOOK002942',
        'namaProduk': 'Laskar Pelangi',
        'penulis': 'Andrea Hirata',
        'hargaBeli': 55000,
        'hargaJual': 68000,
        'totalTerjual': 20,
        'sisaStok': 56,
    },
];
console.log('\n// Function 08');
console.log(getInfoPenjualan(dataPenjualanNovel));
