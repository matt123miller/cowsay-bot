import { Application, Request, Response } from 'express';

import * as CowsayController from "./controllers/cowsay";


// export class Router {
export let setupRoutes = (app: Application) => {

    app.get('/', (req: Request, res: Response) => {

        return res.render('index.html');
    });

    app.post('/cowsay', CowsayController.consumeInput);

    return app;
}