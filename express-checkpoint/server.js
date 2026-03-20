const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Custom middleware to verify time of request
const timeVerify = (req, res, next) => {
    const date = new Date();
    const day = date.getDay(); // 0 is Sunday, 1 is Monday... 6 is Saturday
    const hour = date.getHours();

    // Monday to Friday (1 to 5), 9 to 17
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.status(503).send('<h1 style="text-align: center; margin-top: 50px;">Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).</h1>');
    }
};

app.use(timeVerify);

app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/services', (req, res) => {
    res.render('Services');
});

app.get('/contact', (req, res) => {
    res.render('Contact');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
