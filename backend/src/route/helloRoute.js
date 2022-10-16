const { Router } = require("express");
const HelloController = require("../controller/helloController")
const router = Router();


router.get("/hello", HelloController.hello);
//esto quiere decir : 
//cuando alguien ingrese al recurso hello por medio del verbo 
//get de http ejecutamo lo q hay en el metodo HelloControler
//principal mente hello  
module.exports = router;
