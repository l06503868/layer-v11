const chalk = require('chalk');

// Function to generate a random hex color code
function randomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to apply rainbow effect to a string
function rainbowText(text) {
    const rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta', 'cyan'];
    let rainbowText = '';
    for (let i = 0; i < text.length; i++) {
        rainbowText += chalk[rainbowColors[i % rainbowColors.length]](text[i]);
    }
    return rainbowText;
}

module.exports = {
    randomHexColor,
    rainbowText
};
