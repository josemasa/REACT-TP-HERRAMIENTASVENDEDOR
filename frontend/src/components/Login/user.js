import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const user = () =>{
    //el numero de veces que se encripta el
    const saltRounds = 10;

    //esquema con el que se creo el user en mongoDB
    const UserSchema = new mongoose.Schema({
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true}
    });

    UserSchema.pre('save', function(next){
        if(this.isNew || this.isModified('password')){
            const document = this;
            bcrypt.hash(document.password,saltRounds,(err,hashedPassword)=>{
                if(err){
                    next(err);
                }else{
                    document.password = hashedPassword;
                    next();
                }
            });
        }else{
            next();
        }
    });

    UserSchema.methods.isCorrectPassword = function(password,callback){
        bcrypt.compare(password,this.password,function(err,same){
            if(err){
                callback(err);
            }else{
                callback(err,same);
            }
        });
    }
}
export default user;
