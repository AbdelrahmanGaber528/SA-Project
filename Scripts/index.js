
//  Dropdown Menu Categories

/***************************************************************** */
/***************************************************************** */

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

function openSidebar() {
    const side = document.getElementById("sidebar");
    side.style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

/***************************************************************** */
/***************************************************************** */


// Close dropdown  if clicked outside

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName('dropdown');
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('active');
        }
    }
};