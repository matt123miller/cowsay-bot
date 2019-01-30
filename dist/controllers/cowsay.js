"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var say = require('cowsay').say; // Require gets around the lack of typings warning
var errorText = 'Sorry, something went wrong :( \nMoooooo.';
exports.consumeInput = function (req, res) {
    // Parse request input
    var bodyText = req.body.text || errorText;
    // Decide on what to do
    // Can be extended later
    var cowOpts = {
        text: bodyText
    };
    var cowText = say(cowOpts);
    // Send back a cow
    return res.send({
        'response_type': 'in_channel',
        'text': "```" + cowText + "```"
    });
};
