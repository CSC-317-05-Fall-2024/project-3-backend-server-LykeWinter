import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import restaurantData, { getRestaurants, getRestaurant } from './data/restaurants.js';
import apiRouter from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Attractions page Route
app.get('/attractions',(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

// Route for the restaurants page (using EJS)
app.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();  //New function to get restaurant data
    res.render('restaurants', { restaurants }); // Passign the data to the EJS view
});

// Route for getting a specific restaurant by ID
app.get('/restaurants/:id', (req, res) => {
    const restaurantId = Number(req.params.id); // Get the ID from the parameters
    const restaurant = getRestaurant(restaurantId); // Use the function to find the restaurant

    if (restaurant) {
        res.render('restaurant-details', restaurant); // Pass the restaurant data to the view
    } else {
        res.status(404).send('Restaurant not found'); 
    }
});

app.use('/api', apiRouter); // Mount the router with the /api prefix

/// Route for the New Restaurant page
app.get('/new-restaurant-form', (req, res) => {
    res.sendFile(__dirname + '/public/new-restaurant-form.html');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
