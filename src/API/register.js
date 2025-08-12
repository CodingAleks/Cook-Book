import { changeActivePage } from "../navigation.js";
import { isLoggedIn } from "../Pages/account.js";

const baseURL = 'http://localhost:3030/users';

function register(event) {
    event.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(event.target));

    if (email === '' || password === '') {
        return;
    }

    fetch(`${baseURL}/register`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
    })
        .then(res => res.json())
        .then(data => dataHandler(data))
        .catch(err => console.log(err));

    function dataHandler(data) {
        isLoggedIn.isLogged = true;
        localStorage.setItem("accessToken", data.accessToken);
        changeActivePage(document.querySelector('#navButtons p'));
    }
}

export { register, baseURL };