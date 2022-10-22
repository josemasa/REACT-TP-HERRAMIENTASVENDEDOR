


modulo.exports = class HelloController {

  static async hello(req, res, next) {
    try {
      await HelloService.hello(req, res);
    } catch (error) {

    }
    //try catch : evita q alguna inconsisitencia en datos me pare el sistema
    //MANEJA LAS EXCEPCIONES
  }
}

