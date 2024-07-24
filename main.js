function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "usuario" && password === "senha123") {
        alert("Login bem-sucedido!");
        return true;
    } else {
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = "Usuário ou senha incorretos.";
        return false;
    }
}