const isValidPassword = (password) => {
    // Validate null parameter
    if (!password) return 'Error: Password is required';

    // Validate value type
    if (typeof password !== 'string') return 'Error: Invalid data type';

    // Convert data type to string
    password = password.toString();

    // Password requirement
    if (password.length < 8) return 'Error: Invalid password, must have 8 characters or more';
    else if (password.search(/[a-z]/) < 0) return 'Error: Invalid password, must have lower case letter';
    else if (password.search(/[A-Z]/) < 0) return 'Error: Invalid password, must have upper case letter';
    else if (password.search(/[0-9]/) < 0) return 'Error: Invalid password, must have number';
    else return 'Password is valid';
};

module.exports = isValidPassword;
