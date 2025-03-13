firebase.auth().onAuthStateChanged(user =>  {
    if (user) {
        window.location.href = "assets/paginas/inicio.html";
    }
});

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmarPassword = document.getElementById("confirmar_password").value;

    if (password != confirmarPassword) {
        alert('As senhas não coincidem. Por favor, verifique e tente novamente.')
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            window.location.href = "inicio.html"
        }).catch(error => {
            alert(getErrorMessage(error));
        })
    };
}

function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email já cadastrado"
    }

    return error.message;
}