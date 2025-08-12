import { changeActivePage } from "../navigation.js";
import { isLoggedIn } from "../Pages/account.js";
import { baseURL } from "./register.js";

function logout() {
    const token = localStorage.getItem('accessToken');

    fetch(`${baseURL}/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application.json',
            'X-Authorization': token
        }
    })
        .then(res => handleLogout(res))
        .catch(err => console.log(err.message));

    function handleLogout(res) {
        if (res.status < 200 || res.status >= 300) {
            console.log(res);
            return;
        }

        console.log('Logout successful');
        localStorage.clear();
        isLoggedIn.isLogged = false;
        changeActivePage(document.querySelector('#navButtons p'));
    }
}

export { logout };