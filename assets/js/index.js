firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "assets/paginas/inicio.html";
    }
});


function login() {
    showLoading();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            hideLoading();
            window.location.href = "assets/paginas/inicio.html";
        })
        .catch(error => {
            hideLoading();
            alert(getErrorMessage(error));
        });
}

function getErrorMessage(error) {
    if (error.code == "auth/invalid-credential") {
        return "Usuário não encontrado";
    }

    if (error.code == "auth/invalid-email") {
        return "Email ou senha incorreto. Por favor, tente novamente"
    }
    return error.message;
}

function register() {
    window.location.href = "assets/paginas/cadastro.html"
}

function recoverPassword() {
    const email = document.getElementById("email").value;

    showLoading();
    firebase.auth().sendPasswordResetEmail(email).then(() => {
        hideLoading();
        alert('Email enviado com sucesso')
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    })
}