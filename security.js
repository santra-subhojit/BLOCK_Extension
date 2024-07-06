<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Scanner</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        input[type="file"] {
            margin-bottom: 20px;
        }

        button {
            padding: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <h1>File Scanner</h1>

    <input type="file" id="fileInput" accept=".txt, .pdf, .doc, .docx, .zip">
    <button id="scanButton">Scan File</button>

    <div id="scanResult"></div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const fileInput = document.getElementById('fileInput');
            const scanButton = document.getElementById('scanButton');
            const scanResult = document.getElementById('scanResult');

            scanButton.addEventListener('click', function () {
                const file = fileInput.files[0];

                if (file) {
                    // Perform file scanning logic (you might need to send the file to a server for scanning)
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
                const randomNumber = Math.random();
                return randomNumber > 0.5; // Simulating a 50% chance of being safe
            }
        });
    </script>
</body>
</html>