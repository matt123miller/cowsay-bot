import { Application, Request, Response } from 'express';

export let getCowsay = (req: Request, res: Response) => {

    return res.send({ cow: 'cowsay' });
}
