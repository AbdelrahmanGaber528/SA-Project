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



/// sign up spacity code
let z=document.querySelector("[name='first']")

let q=document.querySelector("[name='Last']")

let c=document.querySelector("[name='PhoneNumber']")

let h=document.querySelector("[name='Password']")

let p=document.querySelector("[name='Retry Password']")


document.forms[0].onsubmit=function(e){

    fnamevaild=false
    lnamevaild=false
    passvaild=false
    phonenumbervaild=false

    if(z.value!=="" && z.value.length<=9){
        fnamevaild=true
    }
    if(q.value!=="" && q.value.length<=8){
        lnamevaild=true
    }
    if(c.value!=="" && c.value.length<=13){
        phonenumbervaild=true
    }
    if(h.value!=="" && h.value.length<=15){
        passvaild=true
    }
    if(fnamevaild===false ||
        lnamevaild===false ||
        passvaild===false ||
        phonenumbervaild===false){
        e.preventDefault();
    }
}