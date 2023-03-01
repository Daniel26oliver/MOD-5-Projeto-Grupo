const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Usuario = require('./Usuario')

const Tabela = db.define('Tabela', { 
    item: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true, 
    },
    preco: {
        type: DataTypes.INTEGER,
        allowNull: false,
        require: true,
    },
})

Tabela.belongsTo(Usuario)
Usuario.hasMany(Tabela)

module.exports = Tabela