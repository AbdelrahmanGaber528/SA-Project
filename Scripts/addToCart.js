
function addToCart(button) {
    // Get the parent `.book` element
    const bookElement = button.parentElement;

    // Retrieve book details from data attributes
    const image = bookElement.getAttribute("data-image");
    const title = bookElement.getAttribute("data-title");
    const price = parseFloat(bookElement.getAttribute("data-price"));
    const description = bookElement.getAttribute("data-description");

    // Get existing cart data from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new book to the cart
    cart.push({ image, title, price, description });

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${title} has been added to your cart!`);
}


// Load cart data from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart");

// Check if cart is empty
if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="p-cart" >Your cart is empty!</p>`;
} else {
    // Display cart items
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div>
                <h3>${item.title}</h3>
                <p class="price">Price: $${item.price}</p>
                <p>${item.description}</p>
                <button class="delete-btn">Delete</button>
                <span class="amount">${1}</span>
                <button class="amount-btn"onclick="downNum()" >-</button>
                <button class="amount-btn" onclick="upNum()">+</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Make Payment Function
function makePayment() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        window.location.href = "index.html";
    }
    else{    
        alert("Proceeding to payment...");
        // Redirect to payment page (implement payment page separately)
        window.location.href = "payment.html";
    }}

function delBook(){

        const cartItems = document.querySelectorAll('.cart-item');

        cartItems.forEach(item => {
            const deleteButton = item.querySelector('.delete-btn');
        
            deleteButton.addEventListener('click', () => {
                item.remove();
            });
        });
}
delBook();

    // // clear the cart when refresh the page : 
    // window.addEventListener('beforeunload', () => {
    // const currentUrl = window.location.href;
    // const homepageUrl = 'http://127.0.0.1:5500/cart.html';
    
    // if (currentUrl === homepageUrl) {
    //     localStorage.clear();
    // }
    // });

    // increase and decrease the number of products:
const amount = document.querySelector('.amount');
function upNum(){
    amount.innerHTML ++;
}
function downNum(){
    amount.innerHTML-=1;
}