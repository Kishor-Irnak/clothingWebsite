let cart = [];

function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = `Cart (${cart.length})`;
}

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCartDisplay();
}
