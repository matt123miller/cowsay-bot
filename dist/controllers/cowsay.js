"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cowsay = require('cowsay'); // Require gets around the lack of typings warning
exports.consumeInput = function (req, res) {
    return res.send({ cow: 'cowsay' });
};
