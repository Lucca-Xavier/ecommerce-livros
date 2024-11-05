const { DataTypes } = require("sequelize")
const sequelize = require("../config/bd")


const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING
  },
  sinopse: {
    type: DataTypes.STRING,
    allowNull: true
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type:  DataTypes.STRING,
    allowNull: true

  },

  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },

  qntEstoque: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

})

module.exports = Product