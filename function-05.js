const getSplitName = (givenName) => {
    // Validate null parameter
    if (!givenName) return 'Error: Name is required';

    // Conver data type to string
    givenName = givenName.toString();

    // Split string into array
    let arrName = givenName.split(' ');

    // Validate name only for 3 characters
    if (arrName[3]) return 'Error: This function is only for 3 characters name';

    // Map data to object
    let objName = {
        'firstName': arrName[0],
        'middleName': arrName[1] ? arrName[1] : null,
        'lastName': arrName[2] ? arrName[2] : null,
    };

    // Display output
    return objName;
};

module.exports = getSplitName;
