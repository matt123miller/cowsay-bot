let cowsay: any = require('cowsay'); // Require gets around the lack of typings warning

import { Request, Response } from 'express';

export let consumeInput = (req: Request, res: Response) => {

    // Parse request input

    // Decide on what to do

    // Send back a cow
    return res.send({ cow: 'cowsay' });
}
