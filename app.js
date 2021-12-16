const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("Hello world"));``

app.listen(3030, () => {
    'Movie Catalog service listening to port 3030'
});