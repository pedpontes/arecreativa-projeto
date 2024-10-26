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
exports.getActivitiesRepository = getActivitiesRepository;
exports.createActivitiesRepository = createActivitiesRepository;
exports.deleteActivitiesRepository = deleteActivitiesRepository;
exports.getActivitiesById = getActivitiesById;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getActivitiesRepository() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const activities = yield prisma.activities.findMany();
            return activities;
        }
        catch (error) {
            throw { error: 500, message: "Internal server error" };
        }
    });
}
function createActivitiesRepository(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, resum, objective, BNCC, time_total, necessary_resources, guide } = data;
        try {
            const newActivity = yield prisma.activities.create({
                data: {
                    title,
                    resum,
                    objective,
                    BNCC,
                    time_total,
                    necessary_resources,
                    guide
                }
            });
            return newActivity;
        }
        catch (error) {
            throw { status: 500, message: "Internal server error" };
        }
    });
}
function deleteActivitiesRepository(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma.activities.delete({
                where: {
                    id
                }
            });
        }
        catch (error) {
            throw { status: 500, message: "Internal server error" };
        }
    });
}
function getActivitiesById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const activity = yield prisma.activities.findUnique({
                where: {
                    id
                }
            });
            return activity;
        }
        catch (error) {
            throw { status: 500, message: "Internal server error" };
        }
    });
}
