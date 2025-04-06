const loginButton = document.getElementById("loginButton");
const login = document.getElementById("login");
const password = document.getElementById("password");
const loginvk = document.getElementById("loginvk");
const loginfb = document.getElementById("loginfb");
const loginok = document.getElementById("loginok");

loginButton.addEventListener('click', function(){
  console.log("Логин: " + login.value);
  console.log("Пароль: " + password.value);
});

loginvk.addEventListener('click', function(){
  console.log("Пользователь вошел с помощью VK");
});

loginfb.addEventListener('click', function(){
  console.log("Пользователь вошел с помощью Facebook");
});

loginok.addEventListener('click', function(){
  console.log("Пользователь вошел с помощью Одноклассники");
});

function openLoginForm() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
}

  // Закрытие формы при клике вне формы и затемнения (необязательно)
window.onclick = function(event) {
  if (event.target == document.getElementById("overlay")) {
    closeLoginForm();
  }
}

