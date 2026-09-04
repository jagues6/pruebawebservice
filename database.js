/**
 * Establece la conexion a MongoDB usando la variable de entorno MONGO_URL.
 * Si falla, reintenta cada 5 segundos.
 * @async
 * @function dbConnection
 * @returns {Promise<void>}
 */
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conectado a la base de datos");
  } catch {
    console.log("Error conectando a la base de datos, reintentando en 5s...");
    setTimeout(() => {
      dbConnection();
    }, 5000);
  }
};

export default dbConnection;
