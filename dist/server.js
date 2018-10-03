"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var routes_1 = require("./routes");
// Add the routes.
routes_1.setupRoutes(app_1.default);
// Boot up the server
var server = app_1.default.listen(app_1.default.get('port'), function () {
    console.log("Listening on port " + app_1.default.get('port'));
    console.log("Visit http://localhost:" + app_1.default.get('port'));
    console.log('Press control + C to quit.');
});
exports.default = server;
