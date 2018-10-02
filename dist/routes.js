"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.prototype.setupRoutes = function (app) {
        app.get('/', function (req, res) {
            return res.render('index.html');
        });
        app.post('/cowsay', function (req, res) {
            return res.send({ cow: 'cowsay' });
        });
        return app;
    };
    return Router;
}());
exports.Router = Router;
// export Router;
