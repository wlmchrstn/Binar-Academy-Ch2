// Helper function to format value to rupiah
const formatRupiah = (value) => {
    // Convert value to string
    let newValue = value.toString();

    // Modulus operator to get division remainder
    let remainder = newValue.length % 3;

    // Substract value based on the remainder value
    let rupiah = newValue.substr(0, remainder);

    // Substract value based on the remainder and split it into array that match 3 digit
    let thousand = newValue.substr(remainder).match(/\d{3}/g);

    // Append all string
    if (thousand) {
        let separator = remainder ? '.' : '';
        rupiah += separator + thousand.join('.');
    }

    // Display output
    return `Rp. ${rupiah}`;
};

const getInfoPenjualan = (dataPenjualan) => {
    // Initialize data
    let totalKeuntungan = 0;
    let totalModal = 0;
    let persentaseKeuntungan = 0;
    let produkBukuTerlaris = '';
    let penulisTerlaris = '';
    let terjualSemua = 0;

    // totalKeuntungan & totalModal
    // Loop through all item in value
    for (let i = 0; i < dataPenjualan.length; i++) {
        // Initialize variable
        let {
            hargaBeli,
            hargaJual,
            totalTerjual,
            sisaStok,
        } = dataPenjualan[i];

        // Math formula
        let totalStok = totalTerjual + sisaStok;
        // let keuntungan = hargaJual - hargaBeli;

        // Math calculation
        totalKeuntungan += ((totalTerjual * hargaJual) - (totalStok * hargaBeli));
        totalModal += (totalStok * hargaBeli);

        // Profit perentage calculation
        terjualSemua += totalStok * hargaJual;
    };

    // Calculate profit percentage
    persentaseKeuntungan = Math.floor(terjualSemua / totalModal * 100) - 100;


    // Search highest product sold
    produkBukuTerlaris = dataPenjualan.reduce((value, newValue) => (value.totalTerjual > newValue.totalTerjual) ? value : newValue).namaProduk;

    // Sort data based on writer name alphabetically
    let sortedData = dataPenjualan.sort((a, b) => a.penulis.localeCompare(b.penulis));

    // Create container for siimplified data
    let simplifiedData = [];

    // Map data to new container
    sortedData.map((item, index) => {
        // Initialize variable
        let {
            penulis,
            totalTerjual,
        } = item;
        let lastIndex = simplifiedData[simplifiedData.length - 1];

        // Mapping data
        if (simplifiedData.length === 0) {
            simplifiedData = [...simplifiedData, {
                index,
                penulis,
                totalTerjual,
            }];
        } else if (lastIndex.penulis === penulis) {
            totalTerjual += lastIndex.totalTerjual;
            simplifiedData.push({
                index,
                penulis,
                totalTerjual,
            });
        } else {
            simplifiedData = [...simplifiedData, {
                index,
                penulis,
                totalTerjual,
            }];
        };
    });

    // Search writer with highest product sold
    penulisTerlaris = simplifiedData.reduce((value, newValue) => (value.totalTerjual > newValue.totalTerjual) ? value : newValue).penulis;

    // Map result
    let hasil = {
        'totalKeuntungan': formatRupiah(totalKeuntungan),
        'totalModal': formatRupiah(totalModal),
        'persentaseKeuntungan': `${persentaseKeuntungan}%`,
        produkBukuTerlaris,
        penulisTerlaris,
    };

    // Display output
    return console.log(hasil);
};

// Testing
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

console.log('\n\n// Function 08');
getInfoPenjualan(dataPenjualanNovel);
