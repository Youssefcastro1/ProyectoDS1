// server.js
import express from 'express';
import { obtenerCarros } from './features/modelocarro/api/v1/modelocarro-controller.mjs';
import { obtenerMarcas } from './features/marca/api/v1/marca-controller.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Rutas
app.get('/api/v1/carros', obtenerCarros);
app.get('/api/v1/marcas', obtenerMarcas);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
