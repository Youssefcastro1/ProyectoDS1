// features/marca/api/v1/marca-controller.mjs
import express from "express";
import MarcaModelPrisma from "../../marca-model.prisma.mjs";

const { Router } = express;

export default class MarcaController {
  #router = Router();
  #marcaModel = null;

  constructor() {
    this.#marcaModel = new MarcaModelPrisma();
    this.registerRoutes();
  }

  getRouter() {
    return this.#router;
  }

  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/marcas`, async (req, res) => await this.getAllMarcas(req, res));
    routerV1.post(`/marcas`, async (req, res) => await this.createMarca(req, res));

    this.#router.use(`/v1`, routerV1);
  }

  async getAllMarcas(req, res) {
    try {
      const marcas = await this.#marcaModel.getAllMarcas();
      res.json(marcas);
    } catch (error) {
      console.error(`error: ${error}`);
      res.status(500).send(error.message);
    }
  }

  async createMarca(req, res) {
    try {
      const marca = req.body;
      console.info({ marca });
      await this.#marcaModel.addMarca(marca);
      res.send('Marca creada');
    } catch (error) {
      console.error(`error: ${error}`);
      res.status(500).send(error.message);
    }
  }
}



