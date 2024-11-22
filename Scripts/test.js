const links = document.querySelector('.navbar-links');
const toggleButton = document.querySelector('.dropdown-toggle');

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active');
});

function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
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