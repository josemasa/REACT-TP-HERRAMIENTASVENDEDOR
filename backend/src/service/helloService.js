
modulo.exports = class HelloService {

  static async hello(req, res, next) {
    try {
      return res.json({ helloworld });
    } catch (error) {
      res.status(500).json({ error: error })
    }
    //try catch : evita q alguna inconsisitencia en datos me pare el sistema
    //MANEJA LAS EXCEPCIONES
  }
}
