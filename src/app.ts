/**
 * Configure an express instance with the various middlewares and tools etc.
 * Also this might expose various packages through the app instance, is that a good thing?
 */

import express from 'express';
import { json, urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import nunjucks from 'nunjucks';

dotenv.config({ path: '.env' });


const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(urlencoded({
    extended: true
}))

app.use(json());

app.set("port", process.env.PORT || 3000);

export default app;