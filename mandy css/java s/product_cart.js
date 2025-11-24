document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelector("#cart-items");
    const cartEmptyMessage = document.querySelector("#cart-empty");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    // Cart array to store added products
    const cart = [];

    // Function to update the cart display
    function updateCart() {
        cartItems.innerHTML = ""; // Clear the cart list
        if (cart.length === 0) {
            cartEmptyMessage.style.display = "block";
        } else {
            cartEmptyMessage.style.display = "none";
            cart.forEach((item, index) => {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                const removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.addEventListener("click", () => {
                    cart.splice(index, 1); // Remove item from cart array
                    updateCart(); // Refresh cart display
                });
                listItem.appendChild(removeButton);
                cartItems.appendChild(listItem);
            });
        }
    }

    // Event listener for Add to Cart buttons
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.getAttribute("data-product");
            cart.push(product); // Add product to cart
            updateCart(); // Refresh cart display
        });
    });

    // Initial cart update
    updateCart();
});
