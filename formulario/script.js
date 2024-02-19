let countClicks = 0;
let actionButton = document.getElementById("actionButton");
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let inputPhone = document.getElementById("phone");
let message = document.getElementById("message");

function action() {
    let name = inputName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;
    let phone = inputPhone.value;

    if (!name || !email || !password || !phone) {
        message.textContent = "Preencha todos os espaços!";
        message.className = "error";
    } else {
        message.textContent = "Sucesso!";
        message.className = "success";
    }
}
