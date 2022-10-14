// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)

// Mount routes
app.get('/', (req, res) => {
    res.send('<h3>99 bottls of Kombucha on the wall.</h3><br><a href="/98">Take on down, pass it down.</a>')
});

app.get('/:num1', (req, res) => {
    let num1 = Math.round(parseInt(req.params.num1));
    let num2 = num1 - 1
    const verse1 = 'bottles of Kombucha on the wall, ';
    const verse2 = verse1.slice(0, -13) + ".";
    res.send(
        `<h3>${num1} ${verse1}</h3></br>
         <h3><a href = "${num2 === 0 ? '/' : num2}">${num2 === 0 ? 'Start over.' : "Take one down, pass it down."}</a></h3></br>`
    );
});
// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('listening on port 3000')
})