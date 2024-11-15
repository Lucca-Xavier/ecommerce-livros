const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const Pedido = sequelize.define('Pedido', {
    IdOrder: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    products: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    totalprice: {
        type: DataTypes.FLOAT, 
        allowNull: false
    },
    OrderStatus: {
        type: DataTypes.ENUM('Aguardando pagamento', 'Enviado', 'Entregue'),
        allowNull: false,
        defaultValue: 'Aguardando pagamento'
    },
    data: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});

module.exports = Pedido;
