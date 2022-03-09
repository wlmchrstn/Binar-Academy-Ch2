const isValidPassword = (password) => {
    // Validate null parameter
    if (!password) return console.log('Error: Password is required');

    // Validate value type
    if (typeof password !== 'string') return console.log('Error: Invalid data type');

    // Convert data type to string
    password = password.toString();

    // Password requirement
    if (password.length < 8) return console.log('Error: Invalid password, must have 8 characters or more');
    else if (password.search(/[a-z]/) < 0) return console.log('Error: Invalid password, must have lower case letter');
    else if (password.search(/[A-Z]/) < 0) return console.log('Error: Invalid password, must have upper case letter');
    else if (password.search(/[0-9]/) < 0) return console.log('Error: Invalid password, must have number');
    else return console.log('Password is valid');
};

// Testing
console.log('\n\n// Function 04');
isValidPassword('Meong2021');
isValidPassword('meong2021');
isValidPassword('@eong');
isValidPassword('Meong2');
isValidPassword(0);
isValidPassword();
