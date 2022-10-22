"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Tasks = connection_1.default.define('Tasks', {
    date: {
        type: sequelize_1.DataTypes.DATE,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    hour: {
        type: sequelize_1.DataTypes.STRING,
    },
    condition: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "incomplete"
    },
    favorite: {
        type: sequelize_1.DataTypes.STRING,
    },
});
//export default Tasks;
