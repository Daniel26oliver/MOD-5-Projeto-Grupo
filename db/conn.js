const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('loja', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

//tratamento de erro
try {
    sequelize.authenticate()
    console.log('logado com sucesso')
}catch(err){
   console.log(`falha na conexão: ${err}`)
}

module.exports = sequelize;