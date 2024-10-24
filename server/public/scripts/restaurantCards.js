/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
*/

document.addEventListener("DOMContentLoaded", function() {
    // Attach event listeners to all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.parentElement; // Get the parent card (restaurant-card div)
            card.remove(); // Remove the card from the DOM
        });
    });
});
