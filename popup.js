// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');
  
    encryptButton.addEventListener('click', function () {
      const plainText = textInput.value;
      const encryptedText = encrypt(plainText);
      textInput.value = encryptedText;
    });
  
    decryptButton.addEventListener('click', function () {
      const encryptedText = textInput.value;
      const decryptedText = decrypt(encryptedText);
      textInput.value = decryptedText;
    });
  });
  
  function encrypt(text) {
    return btoa(text);
  }
  
  function decrypt(encryptedText) {
    return atob(encryptedText);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // Attach the click event listener to the button
    document.getElementById('checkButton').addEventListener('click', checkWebsite);
});

function checkWebsite() {
    const urlInput = document.getElementById('urlInput');
    const resultMessage = document.getElementById('result');

    const enteredUrl = urlInput.value.trim();

    if (isValidURL(enteredUrl)) {
        // Use chrome.extension.getBackgroundPage to access the background page
        const backgroundPage = chrome.extension.getBackgroundPage();

        // Now you can use backgroundPage for any operations you need
        backgroundPage.someFunction(); // Replace this with the actual function you want to call

        // ... rest of the code
    } else {
        resultMessage.textContent = 'Please enter a valid URL.';
    }
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}



