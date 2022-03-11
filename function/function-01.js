const changeWord = (selectedText, changedText, text) => {
    // Replace text
    let newText = text.replace(selectedText, changedText);

    // Return value
    return newText;
};

module.exports = changeWord;
