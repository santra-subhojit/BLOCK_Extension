document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const scanButton = document.getElementById('scanButton');
    const scanResult = document.getElementById('scanResult');

    scanButton.addEventListener('click', function () {
        const file = fileInput.files[0];

        if (file) {
            // Perform file scanning logic (send the file to a server for scanning)
            scanResult.innerHTML = 'Scanning...';

            // Simulate server request (replace this with actual server communication)
            setTimeout(() => {
                const isSafe = simulateServerScan(file);
                if (isSafe) {
                    scanResult.innerHTML = 'File is safe.';
                } else {
                    scanResult.innerHTML = 'Warning: The file may contain threats.';
                }
            }, 2000); // Simulating a delay for the server response
        } else {
            scanResult.innerHTML = 'Please select a file.';
        }
    });

    function simulateServerScan(file) {
        // Simulate server-side file scanning logic
        // Replace this with actual server communication
        const maliciousKeywords = ['malicious', 'virus', 'malware'];
        const maliciousUrls = ['malicious-url.com', 'evil-site.org'];
    
        // Read the content of the file
        const reader = new FileReader();
        reader.onload = function (event) {
            const fileContent = event.target.result.toLowerCase(); // Convert to lowercase
    
            // Check for malicious keywords
            const containsMaliciousKeywords = maliciousKeywords.some(keyword => {
                return fileContent.includes(keyword);
            });
    
            // Check for malicious URLs
            const containsMaliciousUrls = maliciousUrls.some(url => {
                return fileContent.includes(url);
            });
    
            // The file is marked as safe if it doesn't contain malicious keywords or URLs
            if (!containsMaliciousKeywords && !containsMaliciousUrls) {
                return true; // File is safe
            } else {
                return false; // File contains threats
            }
        };
    
        reader.readAsText(file);
    }
    
});