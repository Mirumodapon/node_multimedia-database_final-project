const config = require('config').database;
const mysql = require('mysql');

class poolConnect {
  constructor(
    options = {
      ...config,
      waitForConnections: true,
      connectionLimit: 5,
      multipleStatements: false
    }
  ) {
    this.pool = mysql.createPool(options);
  }

  // asyncSQLFunction(sql, options) {
  //     return new Promise((resolve, reject) => {
  //         this.query(sql, options, (erro, row) => {
  //             if (erro) reject(erro);
  //             else resolve(row);
  //         });
  //     });
  // }

  sql(sql, options) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, options, (erro, row) => {
        if (erro) reject(erro);
        else resolve(row);
      });
    });
  }

  connect() {
    return new Promise((successed, failed) => {
      this.pool.getConnection((erro, connection) => {
        this.connection = connection;
        // asyncSQLFunction.bind(connection);
        // connection.sql = asyncSQLFunction;
        if (erro) failed(erro);
        else successed(connection);
      });
    });
  }
}

module.exports = { poolConnect };
