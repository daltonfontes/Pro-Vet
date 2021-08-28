const mongoose = require('../config/database')
const Schema = mongoose.Schema

const AnimaisSchema = new Schema({
    nome: { type: String, required: true },
    especie: { type: String},
    raca: { type: String },
    idade: { type: String,  },
    genero: { type: String },
    pelagem: { type: String },
    temperamento: { type: String },
    
    
}, {
    timestamps: true
})

const Animais = mongoose.model('Animais', AnimaisSchema)

module.exports = Animais