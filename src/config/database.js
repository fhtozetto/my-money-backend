require('dotenv').config()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGODB_URI
module.exports = mongoose.connect(url, { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor informado '{VALUE}' é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O valor informado '{VALUE}' é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."