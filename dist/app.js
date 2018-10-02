"use strict";
/**
 * Configure an express instance with the various middlewares and tools etc.
 * Also this might expose various packages through the app instance, is that a good thing?
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var dotenv_1 = __importDefault(require("dotenv"));
var nunjucks_1 = __importDefault(require("nunjucks"));
dotenv_1.default.config({ path: '.env' });
var app = express_1.default();
nunjucks_1.default.configure('views', {
    autoescape: true,
    express: app
});
app.use(body_parser_1.urlencoded({
    extended: true
}));
app.use(body_parser_1.json());
app.set("port", process.env.PORT || 3000);
exports.default = app;
