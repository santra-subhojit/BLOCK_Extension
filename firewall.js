document.addEventListener('DOMContentLoaded', function() {
    const logContainer = document.getElementById('log-container');
    
    chrome.storage.local.get({ logs: [] }, function(data) {
        const logs = data.logs.slice(0, 2); // Limit logs to first 2 items
        
        const fragment = document.createDocumentFragment(); // Use a document fragment to minimize reflows
        
        logs.forEach(log => {
            const logItem = document.createElement('div');
            logItem.textContent = `URL: ${log.url}, Time: ${new Date(log.timeStamp).toLocaleString()}, Method: ${log.method}`;
            fragment.appendChild(logItem);
        });
        
        logContainer.appendChild(fragment); // Append the fragment to the DOM in one operation
    });
});
