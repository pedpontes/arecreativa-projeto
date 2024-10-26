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
exports.deleteActivitiesController = void 0;
const activitiesRepository_1 = require("../repositories/activitiesRepository");
const activitiesRepository_2 = require("../repositories/activitiesRepository");
const deleteActivitiesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const existActivity = yield (0, activitiesRepository_1.getActivitiesById)(Number(id));
        if (!existActivity) {
            throw { status: 404, message: "Activity not found" };
        }
        yield (0, activitiesRepository_2.deleteActivitiesRepository)(Number(id));
    }
    catch (error) {
        throw { status: error.status, message: error.message };
    }
});
exports.deleteActivitiesController = deleteActivitiesController;
