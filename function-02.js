const checkTypeNumber = (givenNumber) => {
    // Validate null parameter
    if (!givenNumber) return 'Error: Bro where is the parameter?';

    // Validate value type
    if (typeof givenNumber !== "number") return 'Error: Invalid data type';

    // Check if value is Odd or Even
    let typeNumber = givenNumber % 2;
    if (typeNumber) return 'GANJIL';
    else return 'GENAP';
};

module.exports = checkTypeNumber;
