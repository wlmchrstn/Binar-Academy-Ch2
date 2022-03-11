const hitungTotalPenjualan = (data) => {
    // Initialize variable to store result
    let totalTerjual = 0;

    // Looping data to sum result
    for (let index = 0; index < data.length; index++) {
        totalTerjual += data[index].totalTerjual;
    };

    // Display output
    return totalTerjual;
};

module.exports = hitungTotalPenjualan;
