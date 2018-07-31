const express = require('express');
require('dotenv').config({ path: '.env' });

const app = new express();

app.get('/', (req, res) => res.send('Hello World!'));

//TODO: When we have a static url later use /cowsay
app.post('/', postHandler);


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}`));
function postHandler(req, res) {
}
