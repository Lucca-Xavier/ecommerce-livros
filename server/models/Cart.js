const sequelize = require('../config/bd')
const { DataTypes } = require('sequelize');
const User = require('./User')
const Product = require('./Product')

const Cart = sequelize.define('Cart', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },

    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    priceAll: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
})


Cart.belongsTo(User, { foreignKey: 'userId '})
Cart.belongsTo(Product, { foreignKey:  'productId '})
User.hasMany(Cart, { foreignKey: 'userId' });
Product.hasMany(Cart, { foreignKey: 'productId' });


module.exports = Cart;