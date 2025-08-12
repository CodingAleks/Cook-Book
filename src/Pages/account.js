import { html } from '../../node_modules/lit-html/lit-html.js'

let isLoggedIn = true;

function loginContent() {
    return html`
    <p>Login Page</p>
    `;
}

function registerContent() {
    return html`
    <p>Register Page</p>
    `;
}

function logout() {
    return;
}

export { loginContent, registerContent, logout, isLoggedIn };