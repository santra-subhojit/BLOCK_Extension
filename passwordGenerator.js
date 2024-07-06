const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]|:;<>,.?~";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";

const passwordLength = document.getElementById("passwordLength");
const lengthValue = document.getElementById("lengthValue");
const generatedPassword = document.getElementById("generatedPassword");
const generateBtn = document.getElementById("generateBtn");
const saveBtn = document.getElementById("saveBtn");
const toggleRecentBtn = document.getElementById("toggleRecentBtn");
const recentPasswords = document.getElementById("recentPasswords");
const passwordList = document.getElementById("passwordList");

let recentPasswordsArray = [];

passwordLength.addEventListener("input", function () {
  lengthValue.textContent = this.value;
});

generateBtn.addEventListener("click", generatePassword);
saveBtn.addEventListener("click", savePassword);
toggleRecentBtn.addEventListener("click", toggleRecentPasswords);

function generatePassword() {
  let charset = "";
  if (document.getElementById("numbers").checked) charset += numbers;
  if (document.getElementById("symbols").checked) charset += symbols;
  if (document.getElementById("uppercase").checked) charset += uppercase;
  if (document.getElementById("lowercase").checked) charset += lowercase;

  let password = "";
  for (let i = 0; i < passwordLength.value; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  generatedPassword.value = password;
}

function savePassword() {
  const password = generatedPassword.value;
  if (password) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const url = new URL(tabs[0].url);
      const website = url.hostname;
      const date = new Date().toLocaleString();
      recentPasswordsArray.unshift({ password, website, date });
      if (recentPasswordsArray.length > 5) {
        recentPasswordsArray.pop();
      }
      updateRecentPasswordsList();

      chrome.storage.sync.set(
        { recentPasswords: recentPasswordsArray },
        function () {
          console.log("Passwords saved to Chrome storage");
        }
      );
    });
  }
}

function updateRecentPasswordsList() {
  passwordList.innerHTML = "";
  recentPasswordsArray.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.website}: ${item.password} (${item.date})`;
    passwordList.appendChild(li);
  });
}

function toggleRecentPasswords() {
  if (
    recentPasswords.style.display === "none" ||
    recentPasswords.style.display === ""
  ) {
    recentPasswords.style.display = "block";
    toggleRecentBtn.textContent = "Hide Recent Passwords";
  } else {
    recentPasswords.style.display = "none";
    toggleRecentBtn.textContent = "Show Recent Passwords";
  }
}

chrome.storage.sync.get(["recentPasswords"], function (result) {
  if (result.recentPasswords) {
    recentPasswordsArray = result.recentPasswords;
    updateRecentPasswordsList();
  }
});