
function addToCart(button) {
    // Get the parent `.book` element
    const bookElement = button.parentElement;

    // Retrieve book details from data attributes
    const image = bookElement.getAttribute("data-image");
    const title = bookElement.getAttribute("data-title");
    const price = parseFloat(bookElement.getAttribute("data-price"));

    // Get existing cart data from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new book to the cart
    cart.push({ image, title, price });

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
                <p>${generateRandomBookDescription()}</p>
                <button class="delete-btn">Delete</button>
                <span class="amount">${1}</span>
                <button class="decrease-btn"onclick="" >-</button>
                <button class="increase-btn" onclick="">+</button>
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

const amount = document.querySelectorAll('.amount');
const increase = document.querySelectorAll('.increase-btn');
const decrease = document.querySelectorAll('.decrease-btn');

// increase.forEach(item =>{
//     amount.forEach((index)=>{
//         item.addEventListener('click',()=>{
//             index.innerHTML ++;
//         })
//     })
// })

increase.forEach((btn, index) => {
btn.addEventListener('click', () => {
    const amountElement = amount[index];
    const currentAmount = parseInt(amountElement.textContent);
    amountElement.textContent = currentAmount + 1;
});
});
decrease.forEach((btn, index) => {
btn.addEventListener('click', () => {
    const amountElement = amount[index];
    const currentAmount = parseInt(amountElement.textContent);
    if (currentAmount > 1) {
    amountElement.textContent = currentAmount - 1;
    }
});
});




function generateRandomBookDescription() {
    const genres = [
        "Science Fiction",
        "Fantasy",
        "Mystery",
        "Romance",
        "Historical Fiction",
        "Thriller",
        "Dystopian",
        "Horror",
        "Young Adult",
        "Non-Fiction",
        "Graphic Novel",
        "Poetry",
        "Short Story Collection"
      ];
    
      const themes = [
        "love",
        "loss",
        "revenge",
        "redemption",
        "power",
        "identity",
        "hope",
        "fear",
        "greed",
        "ambition",
        "sacrifice",
        "betrayal",
        "coming-of-age"
      ];
    
      const settings = [
        "a distant planet",
        "a forgotten city",
        "a futuristic metropolis",
        "a medieval kingdom",
        "a dystopian wasteland",
        "a small town",
        "a big city",
        "a haunted house",
        "a secret society",
        "a magical realm"
      ];
    
      const plotPoints = [
        "a mysterious disappearance",
        "a forbidden love affair",
        "a dangerous quest",
        "a shocking revelation",
        "a battle between good and evil",
        "a time-traveling adventure",
        "a detective investigation",
        "a supernatural encounter",
        "a political conspiracy",
        "a personal journey of self-discovery"
      ];
  
    // Randomly select a genre, theme, and setting
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];
    const randomPlotPoints = plotPoints[Math.floor(Math.random() * plotPoints.length)];
    // Generate a random description using template literals
    const description = `A ${randomGenre} novel set in ${randomSetting}. It explores themes of ${randomTheme} as ${randomPlotPoints}.`;
  
    return description;
  }

   // to clear the saved shopping 
window.addEventListener('beforeunload',()=>{
    localStorage.clear();
})