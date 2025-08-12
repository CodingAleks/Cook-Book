import { html } from '../../node_modules/lit-html/lit-html.js'
import { login } from '../API/login.js';
import { logout } from '../API/logout.js';
import { register } from '../API/register.js';

let isLoggedIn = { isLogged: false };
const accessToken = localStorage.getItem('accessToken')

if (accessToken && accessToken !== 'undefined') {
    isLoggedIn.isLogged = true;
}


function loginContent() {
    return html`
    <h1>Login Page</h1>
    <form action="submit" @submit=${login}>
        <label>Email:</label>
        <input type="text" id="email" name="email"/>
        <label>Password:</label>
        <input type="password" id="password" name="password"/>
        <button type="submit">Log in</button>
    </form>
    `;
}

function registerContent() {
    return html`
    <h1>Register Page</h1>
    <form action="submit" @submit=${register}>
        <label>Email:</label>
        <input type="text" id="email" name="email"/>
        <label>Password:</label>
        <input type="password" id="password" name="password"/>
        <button type="submit">Register</button>
    </form>
    `;
}

function logoutContent() {
    logout();
    return;
}

export { loginContent, registerContent, logoutContent, isLoggedIn };