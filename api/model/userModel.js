const Sequelize = require('sequelize');
const database = require('../../database/models/index.js');
 
const User = database.sequelize.define('users', {
    id: {
        type: Sequelize.UUIDV4,
        autoIncrement: false,
        allowNull: true,
        primaryKey: true
    },
    nm_usuario: {
        type: Sequelize.STRING,
        allowNull: true
    },
    login: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    situacao: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: true
    }
   
},{
    schema: 'base'
});

User.fillable = ['nm_usuario', 'login', 'email'];
User.loaded = {};

User.fill = function (data) {

   
    User.loaded = {};
    for(v in User.fillable){
        if(User.fillable[v] in data){
            User.loaded[User.fillable[v]] = data[User.fillable[v]];
        }
   
    }  
}
 
module.exports = User;