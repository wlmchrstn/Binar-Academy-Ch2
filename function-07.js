const hitungTotalPenjualan = (data) => {
    // Initialize variable to store result
    let totalTerjual = 0;

    // Looping data to sum result
    for (let index = 0; index < data.length; index++) {
        totalTerjual += data[index].totalTerjual;
    };

    // Display output
    return console.log(totalTerjual);
};

// Testing
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

console.log('\n\n// Function 07');
hitungTotalPenjualan(dataPenjualanPakAldi);
