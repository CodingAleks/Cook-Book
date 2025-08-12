import { changeActivePage } from "../navigation.js";
import { isLoggedIn } from "../Pages/account.js";
import { baseURL } from "./register.js";

function login(event) {
    event.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(event.target));

    fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => handleResponse(res))
        .then(data => dataHandler(data))
        .catch(err => console.log(err.message));

    function handleResponse(res) {
        if (res.status < 200 || res.status >= 300) {
            console.log(res);
            throw new Error("Password doesn't match");
        }
        return res.json();
    }

    function dataHandler(data) {
        console.log(data);
        isLoggedIn.isLogged = true;
        localStorage.setItem("accessToken", data.accessToken);
        changeActivePage(document.querySelector('#navButtons p'));
    }
}

export { login };