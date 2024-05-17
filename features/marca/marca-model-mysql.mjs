// marca-model-mysql.mjs
import mysql from 'mysql';

export default class MarcaModel {
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

  async getAllMarcas() {
    const query = 'SELECT * FROM marcas';
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

  async insertMarca(nombre) {
    const query = 'INSERT INTO marcas (nombre) VALUES (?)';
    const values = [nombre];
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
