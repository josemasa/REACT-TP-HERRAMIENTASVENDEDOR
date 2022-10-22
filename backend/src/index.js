const app = require('./app');
const { dbConnection } = require('./db/config');

const PORT  = process.env.PORT || 5300;

//base de datos
dbConnection();


//Ruta login
app.use('/auth', require('./route/auth'));



async function main() {
  
  await app.listen(app.get('3000'))
}

main();

app.listen(PORT, ()=>{
  console.log("server runing - port ", PORT)
})
