const getAngkaTerbesarKedua = (arr) => {
    // Validate null parameter
    if (!arr) return console.log('Error: Array is required');

    // Validate value type
    if (!Array.isArray(arr)) return console.log('Error: Invalid data type');

    // Sort array from highest to lowest
    arr.sort((a, b) => {
        return b-a;
    });

    // Display output
    return console.log(arr[1]);
};

// Testing
console.log('\n\n// Function 06');
const dataAngka = [9,4,7,7,4,3,2,2,8];
getAngkaTerbesarKedua(dataAngka);
getAngkaTerbesarKedua('9,4,7,8,2,2');
getAngkaTerbesarKedua();