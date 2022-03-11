const checkEmail = (email) => {
    // Validate null parameter
    if (!email) return 'Error: Email is required';

    // Validate value type
    if (typeof email !== 'string') return 'Error: Invalid data type';

    // Convert data type to string
    email = email.toString();

    // Regular Expression for email validation
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Test if email is valid or not
    let result = regEx.test(email);
    if (result) return 'VALID';
    else return 'INVALID';

};

module.exports = checkEmail;
