"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var say = require('cowsay').say; // Require gets around the lack of typings warning
exports.consumeInput = function (req, res) {
    // Parse request input
    // Decide on what to do
    // Send back a cow
    var bodyText = req.body.text || 'oops';
    // Can be extended later
    var cowOpts = {
        text: bodyText
    };
    console.log(req.body);
    // const cowText = 'oops';
    var cowText = say(cowOpts);
    return res.send({
        'response_type': 'in_channel',
        'text': 'The cow says',
        'attachments': [
            {
                // Escaping the backticks so that this displays in a code block in Slack.
                'text': "```" + cowText + "```"
            }
        ]
    });
};
