const express = require('express');
require('dotenv').config({ path: '.env' });

const app = new express();

app.get('/', (req, res) => res.send('Hello World!'));

//TODO: When we have a static url later use /cowsay
app.post('/', postHandler);


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}`));

function postHandler(req, res) {
    const body = req.body;
    console.log(body);

    res.send({
        'response_type': 'in_channel',
        'text': 'The cow says',
        'attachments': [
            {
                'text': cowsayRender('abc')
            }
        ]
    });
}

function cowsayRender(text) {

    let cowText = text;
    return cowText;
}

}
