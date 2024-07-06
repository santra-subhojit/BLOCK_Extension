// passwordManager.js

document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const saveButton = document.getElementById('saveButton');
    const retrieveButton = document.getElementById('retrieveButton');
    const outputDiv = document.getElementById('output');

    saveButton.addEventListener('click', function () {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username && password) {
            savePassword(username, password);
            clearInputs();
            displayOutput('Password saved successfully.');
        } else {
            displayOutput('Please enter both username and password.');
        }
    });

    retrieveButton.addEventListener('click', function () {
        const username = usernameInput.value.trim();
        
        if (username) {
            const password = retrievePassword(username);
            if (password) {
                displayOutput(`Password for ${username}: ${password}`);
            } else {
                displayOutput(`No password found for ${username}.`);
            }
        } else {
            displayOutput('Please enter a username.');
        }
    });

    function savePassword(username, password) {
        // In a real-world scenario, you would likely store this data securely on a server
        localStorage.setItem(username, password);
    }

    function retrievePassword(username) {
        // In a real-world scenario, you would likely retrieve this data securely from a server
        return localStorage.getItem(username);
    }

    function clearInputs() {
        usernameInput.value = '';
        passwordInput.value = '';
    }

    function displayOutput(message) {
        outputDiv.textContent = message;
    }
});