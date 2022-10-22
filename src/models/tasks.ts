import { DataTypes } from "sequelize";
import db from "../db/connection";

export const Tasks = db.define('Tasks', {
  date: {
    type: DataTypes.DATE,
  },
  description: {
    type: DataTypes.STRING,
  },
  hour: {
    type: DataTypes.STRING,
  },
  condition: {
    type: DataTypes.STRING,
    defaultValue:"incomplete"
  },
  favorite: {
    type: DataTypes.STRING,
  },
});

//export default Tasks;
