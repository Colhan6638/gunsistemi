function registerUser(username, password) {
let users = JSON.parse(localStorage.getItem("users")) || [];

for (let i = 0; i < users.length; i++) {
if (users[i].username === username) {
alert("Bu kullanıcı adı zaten var");
return;
}
}

users.push({ username: username, password: password });
localStorage.setItem("users", JSON.stringify(users));

alert("Kayıt başarılı");
window.location.href = "login.html";
}

function loginUser(username, password) {
let users = JSON.parse(localStorage.getItem("users")) || [];

for (let i = 0; i < users.length; i++) {
if (users[i].username === username && users[i].password === password) {
localStorage.setItem("loggedInUser", username);
window.location.href = "dashboard.html";
return;
}
}

alert("Kullanıcı adı veya şifre yanlış");
}

function checkAuth() {
let user = localStorage.getItem("loggedInUser");
if (!user) {
window.location.href = "login.html";
}
}

function logout() {
localStorage.removeItem("loggedInUser");
window.location.href = "login.html";
}function isAdmin() {
let user = localStorage.getItem("loggedInUser");
return user === "admin";
}