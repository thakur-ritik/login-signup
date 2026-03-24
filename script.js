function signup() {
    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Signup Successful!");
    window.location.href = "index.html";
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("user");
    let storedPass = localStorage.getItem("pass");

    if (user === storedUser && pass === storedPass) {
        localStorage.setItem("loggedIn", true);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}