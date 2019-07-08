const Sequelize = require('sequelize');
const db = require('../database');

 const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "favicon.ico"
  }
});

module.exports = {
  db,
  Candy
}
