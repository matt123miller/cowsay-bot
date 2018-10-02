import app from "./app";
import { setupRoutes } from "./routes";

// Add the routes.
setupRoutes(app);

// Boot up the server
const server = app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
    console.log(`Visit http://localhost:${app.get('port')}`);
    console.log('Press control + C to quit.');
});

export default server;