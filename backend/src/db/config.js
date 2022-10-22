const mongoose = require('mongoose')

const dbConnection = async() =>{

    //generar sus credenciales y cadena de conexion para conectar con MongoCompass
    let cnnString = "mongodb+srv://poliaguirre:agustin22@cluster0.swhey.mongodb.net/herramientasDB"

    try {

       await mongoose.connect(cnnString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
       });

       console.log("base de datos online")

    } catch (error) {
        console.log(error)
        throw new Error("Error al momento inicializar la DB")
    }
}

module.exports = {
    dbConnection
}