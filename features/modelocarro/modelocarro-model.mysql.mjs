// modelocarro-model-mysql.mjs
import mysql from 'mysql';

export default class ModelocarroModel {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "inmobiliaria",
    });
  }

  connect() {
    this.connection.connect();
  }

  closeConnection() {
    this.connection.end();
  }

  async getAllModelocarros() {
    const query = 'SELECT * FROM modelocarros';
    try {
      const results = await new Promise((resolve, reject) => {
        this.connection.query(query, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      return results;
    } catch (error) {
      throw error;
    }
  }

  async insertModelocarro(modelo, marcaId) {
    const query = 'INSERT INTO modelocarros (modelo, marcaId) VALUES (?, ?)';
    const values = [modelo, marcaId];
    try {
      const result = await new Promise((resolve, reject) => {
        this.connection.query(query, values, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}
