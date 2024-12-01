
//  Dropdown Menu Categories


function Dropdown(event) {

    event.preventDefault();
    /*
    stops the browser from navigating to #.
    */
    
    const dropdown = event.target.closest('.dropdown');
    /* ensure that only the dropdown related to the clicked element is toggled,
     not all dropdowns on the page. */
    
    dropdown.classList.toggle('active');
}


/** Sidebar funcitons  */


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



// Close dropdown  if clicked outside

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName('dropdown');
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('active');
        }
    }
};


/********************/


document.querySelectorAll(".cart-button").forEach(button => {
    button.addEventListener("click", function() {
        // to change the txt on btn when clicked
        button.innerHTML = "Added to Cart";
        button.style.opacity =1;
    });
});

