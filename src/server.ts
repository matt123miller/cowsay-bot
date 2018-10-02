console.log('hello world');

import app from "./app";

// Add the routes.

// Boot up the server
const server = app.listen(app.get('port'), () => {
    console.log('booted up')
});

export default server;