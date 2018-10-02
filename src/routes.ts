import { Application, Request, Response } from 'express';

export class Router {
    setupRoutes(app: Application) {

        app.get('/', (req: Request, res: Response) => {

            return res.render('hello!');
        });

        app.post('/cowsay', (req: Request, res: Response) => {

            return res.send({ cow: 'cowsay' });
        });

        return app;
    }

}

// export Router;