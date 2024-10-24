// Initialize restaurant data with id, name, phone, address, and photo.
let restaurantData = [
    {
        "id": 0,
        "name": "Zuni Café",
        "phone": "(415) 552-2522",
        "address": "1658 Market St, San Francisco, CA 94102",
        "photo": "images/restaurant/zuni-cafe.jpg"
    },
    {
        "id": 1,
        "name": "Tartine Bakery",
        "phone": "(415) 487-2600",
        "address": "600 Guerrero St, San Francisco, CA 94110",
        "photo": "images/restaurant/tartine-bakery.jpg"
    },
    {
        "id": 2,
        "name": "Swan Oyster Depot",
        "phone": "(415) 673-2585",
        "address": "1517 Polk St, San Francisco, CA 94109",
        "photo": "images/restaurant/swan-oyster-depot.jpg"
    }
];

// Initialize lastId based on the largest existing ID
let lastId = restaurantData.length > 0 ? Math.max(...restaurantData.map(r => r.id)) : -1;

const getNextId = () => {
    lastId += 1; 
    return lastId; 
}

// Get a list of all restaurants
const getRestaurants = () => {
    return restaurantData;
};

// Get a restaurant by its ID
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const restaurant = { id: getNextId(), ...newRestaurant }; 
    restaurantData.push(restaurant); 
};

// Delete a restaurant by its ID
const deleteRestaurant = (id) => {
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
};

// Export default restaurantData
export default restaurantData;

// Export the other functions as named exports
export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
