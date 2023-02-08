const myRequest = new Request('cardText.json');

document.title="Quantum - Login";

const cardHeaderText = document.querySelector('.card-header-text');
const radioButtons = document.querySelectorAll('.radio-text');
const labelPlaceholders = document.querySelectorAll('.label-placeholder');
const forgotText = document.querySelectorAll('.forgot');
const rememberText = document.querySelector('.remember-text');
const loginButton = document.querySelector('#login-button');
const aboutUs = document.querySelector('.about-us');
const footerText = document.querySelector('#footer-text');

fetch(myRequest)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    //
    cardHeaderText.innerHTML = data.card_header_text;
    
    //
    for(let [index, inputElement] of radioButtons.entries()) {
        inputElement.innerHTML = data.radio_buttons[index];
    }

    //
    for(let [index, inputElement] of labelPlaceholders.entries()) {
        inputElement.innerHTML = data.label_placeholders[index];
    }

    //
    for(let [index, inputElement] of forgotText.entries()) {
        inputElement.innerHTML = data.forgot_text[index];
    }

    //
    rememberText.innerHTML = data.remember_me;

    //
    loginButton.innerHTML = data.login_button;

    //
    aboutUs.innerHTML = data.about_us;

    //
    footerText.innerHTML = data.footer_text;
})

// cardHeaderText.innerHTML = 'Log in with Quantum';