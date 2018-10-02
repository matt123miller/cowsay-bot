import app from "./app";
import { Router } from "./routes";

// Add the routes.
const router = new Router();

router.setupRoutes(app);

// Boot up the server
const server = app.listen(app.get('port'), () => {
    console.log(`Listening in port ${app.get('port')}`);
    console.log(`Visit http://localhost:${app.get('port')}`)
});

export default server;