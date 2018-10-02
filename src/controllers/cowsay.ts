let { say } = require('cowsay'); // Require gets around the lack of typings warning

import { Request, Response } from 'express';

let errorText: string = 'Sorry, something went wrong :( \nMoooooo.'

export let consumeInput = (req: Request, res: Response) => {

    // Parse request input
    const bodyText: string = req.body.text || errorText;


    // Decide on what to do


    // Can be extended later
    const cowOpts = {
        text: bodyText
    }

    const cowText: string = say(cowOpts);

    // Send back a cow
    return res.send({
        'response_type': 'in_channel',
        'text': 'The cow says',
        'attachments': [
            {
                // Escaping the backticks so that this displays in a code block in Slack.
                'text': `\`\`\`${cowText}\`\`\``
            }
        ]
    });
}


