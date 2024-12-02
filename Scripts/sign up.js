function Dropdown(event) {

    event.preventDefault();
    /*
    stops the browser from navigating to #.
    */
    
    const dropdown = event.target.closest('.dropdown');
    /*ou ensure that only the dropdown related to the clicked element is toggled,
     not all dropdowns on the page. */
    
    dropdown.classList.toggle('active');
}

/***************************************************************** */
/***************************************************************** */

/** Sidebar funcitons  */

/***************************************************************** */
/***************************************************************** */

// Open the sidebar
function openSidebar() {
    const side = document.getElementById("sidebar");
    side.classList.add("open");  // Add the 'open' class to show the sidebar
}

// Close the sidebar
function closeSidebar() {
    const side = document.getElementById("sidebar");
    side.classList.remove("open");  // Remove the 'open' class to hide the sidebar
}




/** login funcitons  */

const userNameInput = document.querySelector('.userName-sign');
const pass = document.querySelector('.pass-sign');
const signUpButton = document.querySelector('.sign-btn');

signUpButton.addEventListener('click', function () {
    const userName = userNameInput.value.trim();
    const password = pass.value;

    if (userName && password) {
        // Save username and password to localStorage
        localStorage.setItem('userName', userName);
        localStorage.setItem('password', password);

        // Redirect to login page
        window.location.href = 'log-in.html';
    } else {
        alert('Please fill in both username and password!');
    }
});

// Log-In Logic
const logInButton = document.querySelector('.login-btn');
const userLoginInput = document.querySelector('.name-login');
const passLoginInput = document.querySelector('.pass-login');
const storageName = localStorage.setItem('storage',userLoginInput.value);
const storedUserName = localStorage.getItem('storage');
logInButton.addEventListener('click', function () {
    const storedPassword = localStorage.getItem('password');
    if (userLoginInput.value.trim() && passLoginInput.value) {
        if (
            userLoginInput.value === storedUserName &&
            passLoginInput.value === storedPassword
        ) {
            document.querySelector('.login-text').innerHTML = storedUserName;
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password!');
        }
    } else {
        alert('Please fill in both username and password!');
    }
});

