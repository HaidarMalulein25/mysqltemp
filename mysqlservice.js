class MYSQLService {
    constructor() {
        this.mysql = require('mysql2/promise');
    }
    async executeMYSQLQuery(querytoexecute) {
        
        var mysqlconnection = await this.mysql.createConnection({
          host: process.env.MYSQL_HOST,
          user: process.env.DBUserName,
          password: process.env.DBPassword,
          database: process.env.DBName
        });
        var [rows, fields] = await mysqlconnection.execute(querytoexecute);
        await mysqlconnection.end();
        return rows;
      }
      
  }
  module.exports = new MYSQLService();