// features/marca/marca-model.prisma.mjs
import { PrismaClient } from '@prisma/client';

export default class MarcaModelPrisma {

  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addMarca(marca) {
    const respuesta = await this.#prismaClient.marca.create({ data: marca });
    return respuesta;
  }

  async getAllMarcas() {
    return await this.#prismaClient.marca.findMany();
  }
}


