// Toggle Menu for Mobile View
function toggleMenu() {
    const links = document.querySelector('.navbar-links');
    links.classList.toggle('active');
}
// Toggle Dropdown Menu
function Dropdown(event) {
    event.preventDefault();
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('active');
}

function openSidebar() {
    const side = document.getElementById("sidebar");
    side.style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

// Close dropdown && sidebar if clicked outside

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName('dropdown');
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('active');
        }
    }

};