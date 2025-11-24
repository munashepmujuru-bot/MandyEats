document.addEventListener("DOMContentLoaded", () => {
    const recentProductsList = document.querySelector("#recent-products-list");

    // Sample data for demonstration purposes
    const recentProducts = [
        "Lemon Drizzle Cake",
        "Chocolate Eclairs",
        "Birthday Party Catering",
        "Red Velvet Cupcakes"
    ];

    // Function to populate the most recently purchased products
    function displayRecentProducts() {
        recentProductsList.innerHTML = ""; // Clear existing list
        recentProducts.forEach((product) => {
            const listItem = document.createElement("li");
            listItem.textContent = product;
            recentProductsList.appendChild(listItem);
        });
    }

    // Call the function to display the recent products
    displayRecentProducts();
});
