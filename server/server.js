import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import restaurantData from './data/restaurants.js';

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
    res.render('restaurants', { restaurants: restaurantData }); // Pass the restaurant data to EJS
});

/// Route for the New Restaurant page
app.get('/new-restaurant-form', (req, res) => {
    res.sendFile(__dirname + '/public/new-restaurant-form.html');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
