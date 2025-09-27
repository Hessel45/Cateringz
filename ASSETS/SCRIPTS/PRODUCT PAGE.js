// Function to add product to cart
function addToCart(productName, price) {
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');

    // Create list item for the product
    var listItem = document.createElement('li');
    listItem.textContent = productName + ' - $' + price;
    cartItems.appendChild(listItem);

    // Update total price
    var currentTotal = parseFloat(cartTotal.textContent);
    cartTotal.textContent = (currentTotal + price).toFixed(2);
}

// Function to reset the cart
function resetCart() {
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');

    // Remove all items from cart
    cartItems.innerHTML = "";
    
    // Reset total price
    cartTotal.textContent = "0";
}
