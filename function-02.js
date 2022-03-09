const checkTypeNumber = (givenNumber) => {
    // Validate null parameter
    if (!givenNumber) return console.log('Error: Bro where is the parameter?');

    // Validate value type
    if (typeof givenNumber !== "number") return console.log('Error: Invalid data type');

    // Check if value is Odd or Even
    let typeNumber = givenNumber % 2;
    if (typeNumber) return console.log('GANJIL');
    else return console.log('GENAP');
};

// Testing
console.log('\n\n// Function 02');
checkTypeNumber(10);
checkTypeNumber(3);
checkTypeNumber('3');
checkTypeNumber([]);
checkTypeNumber({});
checkTypeNumber();
