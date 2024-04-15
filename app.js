import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
config()
import listasRouter from './src/routes/listas.routes'
const app = express();

//Cargar archivos estaticos 
app.use(express.static('./public'));

// Configuración del motor de vistas


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('src'));


app.use(listasRouter);

export default app;