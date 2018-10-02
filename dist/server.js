"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var routes_1 = require("./routes");
// Add the routes.
var router = new routes_1.Router();
router.setupRoutes(app_1.default);
// Boot up the server
var server = app_1.default.listen(app_1.default.get('port'), function () {
    console.log("Listening in port " + app_1.default.get('port'));
    console.log("Visit http://localhost:" + app_1.default.get('port'));
});
exports.default = server;
