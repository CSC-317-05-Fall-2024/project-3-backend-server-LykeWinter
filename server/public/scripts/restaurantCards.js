/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
*/

document.addEventListener("DOMContentLoaded", function() {
    // Attach event listeners to all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const card = this.parentElement; // Get the parent card (restaurant-card div)
            const id = this.getAttribute('data-id'); // Get the restaurant ID from the data-id attribute

            try {
                // Send a DELETE request to the backend
                const response = await fetch(`/api/restaurants/${id}`, {
                    method: 'DELETE' // Use DELETE method 
                });

                if (response.ok) {
                    // Successfully deleted, remove card from the DOM
                    card.remove(); // Remove the card from the DOM
                } else {
                    console.error("Failed to delete the restaurant:", response.statusText);
                }
            } catch (error) {
                console.error("Error:", error); // Handle any errors that occur
            }
        });
    });
});
