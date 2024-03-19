# Layer-v11

A Node.js module for colorful text and generating random colors.

## Installation

You can install this module via npm: `npm install layer-v11`

## Usage
```javascript
const colorfulUtils = require('colorful-utils');

// Generate a random hex color code
const randomColor = colorfulUtils.randomHexColor();
console.log('Random Hex Color:', randomColor);

// Apply rainbow effect to a string
const rainbowString = colorfulUtils.rainbowText('Hello, World!');
console.log(rainbowString);
```