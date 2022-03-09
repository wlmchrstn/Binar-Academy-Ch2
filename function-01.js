const changeWord = (selectedText, changedText, text) => {
    // Replace text
    let newText = text.replace(selectedText, changedText);

    // Display output
    return console.log(newText);
};

// Testing
const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log('// Function 01');
changeWord('mencintai', 'membenci', kalimat1);
changeWord('bromo', 'semeru', kalimat2);
