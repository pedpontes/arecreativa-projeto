"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handleActivitiesRoute_1 = __importDefault(require("./handleActivitiesRoute"));
const routes = (0, express_1.Router)();
routes.use("/api/activities", handleActivitiesRoute_1.default);
exports.default = routes;
