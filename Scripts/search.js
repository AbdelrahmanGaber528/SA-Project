
function addToCart(image, title, price, description) {
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

// Display cart items
cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div>
            <h3>${item.title}</h3>
            <p>Price: $${item.price}</p>
            <p>${item.description}</p>
        </div>
    `;
    cartContainer.appendChild(cartItem);
});

// Make Payment Function
function makePayment() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Proceeding to payment...");
    // Redirect to payment page (implement this separately)
    window.location.href = "payment.html";
}