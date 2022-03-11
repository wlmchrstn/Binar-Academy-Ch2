const changeWord = (selectedText, changedText, text) => {
    // Replace text
    let newText = text.replace(selectedText, changedText);

    // Display output
    return newText;
};

module.exports = changeWord;
