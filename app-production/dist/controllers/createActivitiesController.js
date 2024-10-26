"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActivitiesController = void 0;
const client_1 = require("@prisma/client");
const activitiesRepository_1 = require("../repositories/activitiesRepository");
const prisma = new client_1.PrismaClient();
const createActivitiesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, resum, objective, BNCC, time_total, necessary_resources, guide } = req.body;
        if (!title || !objective || !BNCC || !time_total || !necessary_resources || !guide) {
            throw { status: 400, message: "Missing required fields" };
        }
        const newActivity = yield (0, activitiesRepository_1.createActivitiesRepository)(req.body);
        return newActivity;
    }
    catch (error) {
        throw error;
    }
});
exports.createActivitiesController = createActivitiesController;
