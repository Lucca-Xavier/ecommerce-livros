const sequelize = require('./config/bd')
const User = require('./models/User')
const Product = require('./models/Product')



sequelize.sync({ force: true }).then(() => {
    console.log('Synced database')
}).catch((error) => {
    console.error('Erro ao sincronizar banco de dados: ', error)
})