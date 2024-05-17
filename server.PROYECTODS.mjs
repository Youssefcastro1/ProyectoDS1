// server.PROYECTODS.mjs
import 'dotenv/config';
import express, { json } from 'express';
import CarroController from './features/modelocarro/api/v1/modelocarro-controller.mjs';
import MarcaController from './features/marca/api/v1/marca-controller.mjs';

const app = express();

// Middleware para devolver responses como JSON
app.use(json());

// Routes
const carroApiController = new CarroController();
const marcaApiController = new MarcaController();

app.use('/api/', carroApiController.getRouter());
app.use('/api/', marcaApiController.getRouter());

// Start the server
const PORT = process.env.PORT || 3000;

console.log(process.env.MYSQL_DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

