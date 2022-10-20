


modulo.exports = class HelloController {
  static async hello(req, res, next) {

    return res.json({
      estado: true,
      mensaje: "Hello"
    })
    try {

    } catch {

    }
    //try catch : evita q alguna inconsisitencia en datos me pare el sistema 
  }
}