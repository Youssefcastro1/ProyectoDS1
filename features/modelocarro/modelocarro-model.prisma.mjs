// features/modelocarro/modelocarro-model.prisma.mjs
import { PrismaClient } from '@prisma/client';

export default class CarroModelPrisma {

  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addCarro(carro) {
    const respuesta = await this.#prismaClient.carro.create({ data: carro });
    return respuesta;
  }

  async getAllCarros() {
    return await this.#prismaClient.carro.findMany();
  }
}


