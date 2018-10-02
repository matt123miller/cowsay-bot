"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CowsayController = __importStar(require("./controllers/cowsay"));
// export class Router {
exports.setupRoutes = function (app) {
    app.get('/', function (req, res) {
        return res.render('index.html');
    });
    app.post('/cowsay', CowsayController.getCowsay);
    return app;
};
