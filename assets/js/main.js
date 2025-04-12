// ==================== HTML Selections ====================
// signUp page inputs
let userNameSignUp = document.getElementById("userNameSignUp");
let userMailSignUp = document.getElementById("userMailSignUp");
let userPassSignUp = document.getElementById("userPassSignUp");
let signUpBtn = document.getElementById("signUpBtn");

// signIn page inputs
let userMailSignIn = document.getElementById("userMailSignIn");
let userPassSignIn = document.getElementById("userPassSignIn");
let signInBtn = document.getElementById("signInBtn");

// logout btn
let logoutBtn = document.getElementById("logoutBtn");

// alerts message
let existsAlert = document.getElementById("existsAlert");
let successAlert = document.getElementById("successAlert");
let requiredAlert = document.getElementById("requiredAlert");
let noAccount = document.getElementById("noAccount");

// ==================== global ====================
let accounts = [];
if (window.localStorage.getItem("accounts")) {
  accounts = JSON.parse(window.localStorage.getItem("accounts"));
}

// ==================== functions ====================

// [4] check if email already exists to go welcome page function
function ifMailExists() {
  for (let i = 0; i < accounts.length; i++) {
    if (
      accounts[i].userMail === userMailSignIn.value &&
      accounts[i].userPass === userPassSignIn.value
    ) {
      window.open("welcomePage.html", "_self");
    }
  }
}

// [3] check if email already exists to add mail or not function
function checkIfExists() {
  if (userNameSignUp.value !== "" && userMailSignUp.value !== "" && userPassSignUp.value !== "") {
    if (accounts.length > 0) {
      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].userMail === userMailSignUp.value) {
          existsAlert.classList.replace("d-none", "d-block");
          successAlert.classList.replace("d-block", "d-none");
          requiredAlert.classList.replace("d-block", "d-none");
          return false;
        } else {
          successAlert.classList.replace("d-none", "d-block");
          existsAlert.classList.replace("d-block", "d-none");
          requiredAlert.classList.replace("d-block", "d-none");
          return true;
        }
      }
    } else {
      successAlert.classList.replace("d-none", "d-block");
      existsAlert.classList.replace("d-block", "d-none");
      requiredAlert.classList.replace("d-block", "d-none");
      return true;
    }
  } else {
    requiredAlert.classList.replace("d-none", "d-block");
    successAlert.classList.replace("d-block", "d-none");
    existsAlert.classList.replace("d-block", "d-none");
  }
}

// [2] reset function
function resetInputs() {
  userNameSignUp.value = null;
  userMailSignUp.value = null;
  userPassSignUp.value = null;
}

// [1] addSite function
function createAccount() {
  if (checkIfExists()) {
    let account = {
      userName: userNameSignUp.value,
      userMail: userMailSignUp.value,
      userPass: userPassSignUp.value,
    };
    checkIfExists();
    accounts.push(account);
    window.localStorage.setItem("accounts", JSON.stringify(accounts));
    resetInputs();
  }
}

// ==================== events ====================
// signUpBtn.addEventListener("click", createAccount); // error
// signInBtn.addEventListener("click", ifMailExists);  // error
