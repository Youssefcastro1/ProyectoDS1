// features/modelocarro/api/v1/modelocarro-controller.mjs
import express from "express";
import CarroModelPrisma from "../../modelocarro-model.prisma.mjs";

const { Router } = express;

export default class CarroController {
  #router = Router();
  #carroModel = null;

  constructor() {
    this.#carroModel = new CarroModelPrisma();
    this.registerRoutes();
  }

  getRouter() {
    return this.#router;
  }

  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/carros`, async (req, res) => await this.getAllCarros(req, res));
    routerV1.post(`/carros`, async (req, res) => await this.createCarro(req, res));

    this.#router.use(`/v1`, routerV1);
  }

  async getAllCarros(req, res) {
    try {
      const carros = await this.#carroModel.getAllCarros();
      res.json(carros);
    } catch (error) {
      console.error(`error: ${error}`);
      res.status(500).send(error.message);
    }
  }

  async createCarro(req, res) {
    try {
      const carro = req.body;
      console.info({ carro });
      await this.#carroModel.addCarro(carro);
      res.send('Carro creado');
    } catch (error) {
      console.error(`error: ${error}`);
      res.status(500).send(error.message);
    }
  }
}


