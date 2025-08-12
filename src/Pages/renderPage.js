import {render} from '../../node_modules/lit-html/lit-html.js'
import { loginContent, logout, registerContent } from './account.js';
import { catalogContent } from './catalog.js';
import { createRecipeContent } from './createRecipe.js';
import { homeContent } from './home.js';

function renderMainContent(pageName) {
    render(template(pageName), document.getElementById('main-content'));

    function template(pageName) {
        const pages = {
            'Home': homeContent,
            'Catalog': catalogContent,
            'Login': loginContent,
            'Register': registerContent,
            'Create Recipe': createRecipeContent,
            'Logout': logout,
        }

        return pages[pageName]();
    }
}

export { renderMainContent };