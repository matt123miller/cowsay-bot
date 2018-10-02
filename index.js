const express = require('express');
const bodyParser = require('body-parser');
const cowsay = require('cowsay');
require('dotenv').config({ path: '.env' });

const app = new express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// ROUTES

app.get('/', (req, res) => res.send('Hello World!'));

//TODO: When we have a static url later use /cowsay
app.post('/', postHandler);

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));

// BUSINESS LOGIC

function postHandler(req, res) {
    const bodyText = req.body.text;
    const cowText = cowsayRender(bodyText);

    res.send({
        'response_type': 'in_channel',
        'text': 'The cow says',
        'attachments': [
            {
                'text': `\`\`\`${cowText}\`\`\``
            }
        ]
    });
}

function cowsayRender(text) {

    let cowText = cowsay.say({
        text: text
    });

    return cowText;
}