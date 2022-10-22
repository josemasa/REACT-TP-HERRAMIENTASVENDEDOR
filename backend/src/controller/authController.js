const { response } = require('express');
const Usuario = require('../models/Usuario');
const bycrypt = require('bcryptjs');

const crearUsuario = async (req, res = response)=>{

    const {name, email, password } = req.body;

    if(!email || !name || !password){
        return res.status(400).json({
            estado: false,
            mensaje: "Campos invalidos"
        })
    }

    try {

        //verificar que no exista un correo igual
        const usuario = await Usuario.findOne({email});

        if(usuario){
            res.status(400).json({
                estado: false,
                mensaje: "El usuario ya existe en la DB"
            })
        }

        //crear el usuario con el modelo
        const dbUser = new Usuario(req.body);


        //encriptar la contraseña
        const salt = bycrypt.genSaltSync();
        dbUser.password = bycrypt.hashSync(password, salt);


        //crear el usuario en la db
        await dbUser.save()
        
        //generar respuesta existosa
        return res.status(200).json({
            estado: true,
            mensaje: 'Usuario creado correctamente',
            nombre: dbUser.name,
            email: dbUser.email
        });

    

        
    } catch (error) {
        return res.status(400).json({
            estado: false,
            mensaje: "Por favor comunicarse con el admin"
        })
    }

    
}

const loginUsuario = async(req, res = response)=>{

    
    const {email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({
            estado: false,
            mensaje: "Campos invalidos"
        })
    }

    try {
        
        const dbUser = await Usuario.findOne({email})
        if(!dbUser){
            return res.status(400).json({
                estado:false,
                mensaje: 'El correo no existe'
            })
        }

        //confirmar el match del password
        const validPassword = bycrypt.compareSync(password, dbUser.password);

        if(!validPassword){
            return res.status(400).json({
                estado:false,
                mensaje: 'Password incorrecto'
            })
        }

        //generar la respuesta correcta
        return res.json({
            estado: true,
            nombre: dbUser.name,
            email: dbUser.email,
            mensaje: "Logueado correctamente"
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            estado: true,
            mensaje: 'Comuniquese con el administrador'
        })
    }


    
}

module.exports = {
    crearUsuario,
    loginUsuario
}