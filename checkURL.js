document.addEventListener('DOMContentLoaded', function () {
    // Attach the click event listener to the button
    document.getElementById('checkButton').addEventListener('click', checkWebsite);
  });
  
  function checkWebsite() {
    const urlInput = document.getElementById('urlInput');
    const resultMessage = document.getElementById('result');
  
    const enteredUrl = urlInput.value.trim();
  
    if (isValidURL(enteredUrl)) {
      if (isPhishing(enteredUrl)) {
        resultMessage.textContent = 'Warning: This website may be a phishing site!';
        alert('Warning: This website may be a phishing site!');
      } else if (!checkHttps(enteredUrl)) {
        resultMessage.textContent = 'Warning: This website does not use HTTPS!';
        alert('Warning: This website does not use HTTPS!');
      } else {
        // Fetch the malicious URLs from the external JSON file
        fetchMaliciousUrls()
          .then(maliciousUrls => {
            // Check if enteredUrl is in the list of malicious URLs
            if (maliciousUrls.includes(enteredUrl)) {
              resultMessage.textContent = 'Warning: This website is flagged as malicious!';
              alert('Warning: This website is flagged as malicious!');
            } else {
              resultMessage.textContent = 'This website is safe.';
            }
          })
          .catch(error => {
            console.error('Error fetching malicious URLs:', error);
          });
      }
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
  
  function isPhishing(url) {
    // Define common phishing patterns or keywords
    const phishingPatterns = [
      'login',
      'account',
      'verify',
      'paypal',
      'bank',
      'secure',
      'confirm',
    ];
  
    // Create a regex pattern based on the defined keywords
    const regexPattern = new RegExp(phishingPatterns.join('|'), 'i');
  
    // Check if the URL contains the phishing pattern
    return regexPattern.test(url);
  }
  
  function checkHttps(url) {
    return url.startsWith('https://');
  }
  
  async function fetchMaliciousUrls() {
    try {
      // Fetch the JSON file containing malicious URLs
      const response = await fetch('malicious-urls.json');
      const data = await response.json();
  
      // Extract the maliciousUrls array from the JSON data
      return data.maliciousUrls || [];
    } catch (error) {
      throw error;
    }
  }
  