const getAngkaTerbesarKedua = (arr) => {
    // Validate null parameter
    if (!arr) return 'Error: Array is required';

    // Validate value type
    if (!Array.isArray(arr)) return 'Error: Invalid data type';

    // Sort array from highest to lowest
    arr.sort((a, b) => {
        return b-a;
    });

    // Display output
    return arr[1];
};

module.exports = getAngkaTerbesarKedua;
