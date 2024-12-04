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
const passConfirm = document.querySelector('.pass-again');

signUpButton.addEventListener('click', function () {

    const userName = userNameInput.value.trim();
    const password = pass.value;
    const confirmPass = passConfirm.value;
    
    if (userName && password) {
            if(password === confirmPass)
                window.location.href = 'log-in.html';
            else
                alert("Please fill the password correct.");
    } else {
        alert('Please fill in both username and password!');
    }
});
