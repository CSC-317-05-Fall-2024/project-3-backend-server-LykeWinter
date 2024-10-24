import express from 'express';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from '../data/restaurants.js';

const router = express.Router();

// API endpoint to get all restaurants
router.get('/restaurants', (req, res) => {
    res.json(getRestaurants()); // Send back the list of restaurants as JSON
});

// API endpoint to get a restaurant by ID
router.get('/restaurants/:id', (req, res) => {
    const restaurantId = Number(req.params.id);
    const restaurant = getRestaurant(restaurantId);

    if (restaurant) {
        res.json(restaurant); // Send back the restaurant data as JSON
    } else {
        res.status(404).json({ message: 'Restaurant not found' });
    }
});

// API endpoint to create a new restaurant
router.post('/restaurants', (req, res) => {
    const newRestaurant = req.body; // Get the new restaurant data from the request body
    createRestaurant(newRestaurant); // Call the function to add the restaurant
    res.status(201).json(newRestaurant); // Respond with the newly created restaurant
});

// API endpoint to delete a restaurant by ID
router.delete('/restaurants/:id', (req, res) => {
    const restaurantId = Number(req.params.id);
    deleteRestaurant(restaurantId); // Call the delete function
    res.status(204).send(); // No content
});

// Export the router as a named export
export default router; // Make sure you're using default export
