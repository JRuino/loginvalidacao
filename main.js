function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "usuario" && password === "senha123") {
        showCustomAlert();
        return false;
    } else {
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = "Usuário ou senha incorretos.";
        return false;
    }
}

function showCustomAlert() {
    var alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'block';
    setTimeout(function() {
        window.location.href = "logado.html";
    }, 3000);
}