const checkEmail = (email) => {
    // Validate null parameter
    if (!email) return console.log('Error: Email is required');

    // Validate value type
    if (typeof email !== 'string') return console.log('Error: Invalid data type');

    // Convert data type to string
    email = email.toString();

    // Regular Expression for email validation
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Test if email is valid or not
    let result = regEx.test(email);
    if (result) return console.log('VALID');
    else return console.log('INVALID');

};

// Testing
console.log('\n\n// Function 03');
checkEmail('apranata@binar.co.id');
checkEmail('apranata@binar.com');
checkEmail('apranata@binar');
checkEmail('apranata');
checkEmail(3322);
checkEmail(1);
