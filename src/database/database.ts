import "dotenv/config";
import { Sequelize } from "sequelize";

const DB_USERNAME =
  process.env.DB_USERNAME || "dave"; /* no se por que no esta funcionando */
const DB_DATABASE = process.env.DB_DATABASE || "nombre_sistema";
const DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3360;

export const sequelize = new Sequelize(
  DB_DATABASE,
  DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "dbservice",
    password: process.env.DB_PASSWORD,
    dialect: "mysql",
    port: DB_PORT,
  }
);
