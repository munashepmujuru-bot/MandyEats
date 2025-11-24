document.addEventListener("DOMContentLoaded", () => {
    const pageLoader = document.querySelector("#page-loader");
    const content = document.querySelector("#content");

    // Simulate loading delay (2 seconds for demonstration)
    setTimeout(() => {
        pageLoader.style.display = "none"; // Hide the spinner
        content.style.display = "block"; // Show the content
    }, 2000); // Adjust the delay as needed
});
