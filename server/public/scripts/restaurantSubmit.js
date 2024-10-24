const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract values from the form fields
    const name = document.getElementById('restaurant-name').value;
    const phone = document.getElementById('restaurant-phone').value;
    const address = document.getElementById('restaurant-address').value;
    const photoUrl = document.getElementById('photo-url').value;

    // Create an object with the new restaurant data
    const newRestaurant = {
        name: name,
        phone: phone,
        address: address,
        photo: photoUrl || '' // Provide an empty string if the photo URL is not given
    };

    try {
        // Send a POST request to the backend to create a new restaurant
        const response = await fetch('/api/restaurants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Specify content type as JSON
            },
            body: JSON.stringify(newRestaurant) // Convert the data to a JSON string
        });

        if (response.ok) {
            // If creation is successful, navigate back to the restaurants page
            window.location.href = '/restaurants'; 
        } else {
            console.error("Failed to create restaurant:", response.statusText); // Log error if response is not ok
        }
    } catch (error) {
        console.error("Error:", error); // Handle any network or other errors
    }
};

// Assign the event handler to the form for submit events
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-restaurant-form');
    if (form) {
        form.addEventListener('submit', handleSubmit); // Attach handleSubmit to the form submit event
    }
});