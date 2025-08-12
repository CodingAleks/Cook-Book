import { render, html } from '../node_modules/lit-html/lit-html.js'
import { isLoggedIn } from './Pages/account.js';
import { renderMainContent } from './Pages/renderPage.js';

const navigationState = {
    'Home': 'active',
    'Catalog': 'inactive',
    'Create Recipe': 'inactive',
    'Logout': 'inactive',
    'Login': 'inactive',
    'Register': 'inactive',
};
let activePage = 'Home';

function navigationComponent() {
    return html`
        <div>
            <h1>My Cookbook</h1>
        </div>
        <div id="navButtons" @click=${(e) => changeActivePage(e)}>
            <p class=${navigationState['Home']}>Home</p>
            <p class=${navigationState['Catalog']}>Catalog</p>
            ${isLoggedIn ? loggedNav() : registerNav()}
        </div>`
}

function loggedNav() {
    return html`
    <p class=${navigationState['Create Recipe']}>Create Recipe</p>
    <p class=${navigationState['Logout']}>Logout</p>`;
}

function registerNav() {
    return html`
    <p class=${navigationState['Login']}>Login</p>
    <p class=${navigationState['Register']}>Register</p>
    `;
}

function changeActivePage(e) {
    if (e.target.tagName !== 'P' || e.target.className === 'active') {
        return;
    }

    navigationState[activePage] = 'inactive';
    activePage = e.target.innerText;
    navigationState[activePage] = 'active';

    renderNavigation();
    renderMainContent(activePage);
}

function renderNavigation() {
    const navigationElement = document.getElementById('navigation');
    render(navigationComponent(), navigationElement);
}

export { renderNavigation };