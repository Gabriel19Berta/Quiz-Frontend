firebase.auth().onAuthStateChanged(user =>  {
    if (user) {
        window.location.href = "assets/paginas/inicio.html";
    }
});

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        window.location.href = "inicio.html"
    }).catch(error => {
        alert(getErrorMessage(error));
    })
}

function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email já cadastrado"
    }

    return error.message;
}