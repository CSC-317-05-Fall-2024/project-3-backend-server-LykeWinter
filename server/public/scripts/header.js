document.addEventListener("DOMContentLoaded", function() {
    // Populate header
    const header = document.querySelector('header');
    header.innerHTML = `
        <div class="header-box">
            <h1>San Francisco</h1>
        </div>
    `;

    // Populate navigation
    const nav = document.querySelector('nav');
    nav.innerHTML = `
        <a href="/">Home</a>
        <a href="/attractions">Attractions</a>
        <a href="/restaurants">Restaurants</a>
        <a href="/new-restaurant-form">Add Restaurant</a>
    `;

    // Populate footer
    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <p>&copy; 2024 San Francisco Travel Guide</p>
    `;
});
