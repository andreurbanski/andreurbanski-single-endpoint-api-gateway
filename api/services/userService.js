class userService{

    constructor(){

    }

    async detail(request){
  
        var users = require('../model/userModel.js');
        var lista_usuarios = await  users.findByPk(request.id);
        
        return lista_usuarios;
    }

    async list(request){
        var users = require('../model/userModel.js');
        users.fill(request);
       // console.log(users.fillable);
        var usuario = await  users.findAll({where : users.loaded });  

        return usuario;
    }
}


module.exports = new userService;