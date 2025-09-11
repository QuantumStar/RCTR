// This file contains the JavaScript code for the website. It handles interactivity, event listeners, and any dynamic content updates on the webpage.

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', function() {
        output.textContent = 'Button clicked! Welcome to my business website!';
    });
});