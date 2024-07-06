// assistant.js

const securityQuestions = {
    1: "Secure browsing refers to the practice of using the internet in a way that minimizes risk to your privacy and security. This includes using HTTPS websites, avoiding suspicious links, and keeping your browser and plugins updated.",
    2: "To protect your website from SQL injection, use parameterized queries with prepared statements in your database interactions. Validate and sanitize input data, limit database permissions, and use frameworks with built-in protection.",
    3: "Common types of phishing attacks include email phishing, where attackers impersonate legitimate entities to steal sensitive information, and spear phishing, targeting specific individuals with personalized messages.",
    4: "HTTPS encrypts data transmitted between a user's browser and the website, ensuring that sensitive information like login credentials and payment details remain secure from eavesdropping and tampering.",
    5: "Best practices for securing a web application include regular security audits, using strong authentication mechanisms, input validation, implementing least privilege access controls, and keeping software up to date.",
    6: "Protect passwords online by using strong, unique passwords for each account, enabling two-factor authentication, avoiding password reuse, and using a reputable password manager to securely store passwords.",
    7: "Phishing is a fraudulent attempt to obtain sensitive information by disguising oneself as a trustworthy entity through electronic communication. It often targets users through emails, social media, or websites.",
    8: "Our web security extension protects against malicious websites by blocking access to known malicious domains, preventing harmful scripts from running, and providing real-time alerts about potential threats.",
    9: "Ad blockers enhance web security by blocking ads that may contain malicious code or lead to compromised websites. They also improve browsing speed and reduce data usage.",
    10: "Stay informed about the latest web security threats by following security blogs, subscribing to security newsletters, attending conferences and webinars, and participating in forums and communities.",
};

document.addEventListener('DOMContentLoaded', function () {
    const askButton = document.getElementById('askButton');
    const securityQuestionsDropdown = document.getElementById('securityQuestions');
    const answerDiv = document.getElementById('answer');

    askButton.addEventListener('click', function () {
        const selectedQuestion = securityQuestionsDropdown.value;
        const answer = securityQuestions[selectedQuestion];
        
        if (answer) {
            answerDiv.innerHTML = `<p>${answer}</p>`;
        } else {
            answerDiv.innerHTML = "<p>No answer found for the selected question.</p>";
        }
    });
});
