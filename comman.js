
function openSignUp() {
    var signup = document.getElementById('SignUpModal');
    signup.style.display = 'block';
}

function openSignIn() {
    var signup = document.getElementById('SignInModal');
    signup.style.display = 'block';
}


function closeModule(id) {
    id.style.display = 'none';
}

function openSignUpCloseSignIn() {
    var signIn = document.getElementById('SignInModal');
    signIn.style.display = 'none';

    var signup = document.getElementById('SignUpModal');
    signup.style.display = 'block';
}