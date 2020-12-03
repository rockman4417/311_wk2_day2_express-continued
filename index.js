const express = require("express");
const bodyParser = require("body-parser");
const contacts = require('./routes/contacts.js')
const vehicles = require('./routes/vehicles.js')
const comments = require('./routes/comments.js')
const products = require('./routes/products.js')
const app = express();
app.use(express.static('public'))
app.use(express.json())
app.use(contacts, vehicles, comments, products)

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


