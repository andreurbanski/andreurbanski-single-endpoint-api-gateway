class apiController{

    constructor(){
        
    }

    async endpoint(request, response){

       
        const fs = require('fs');
        const servicesPath = './api/services/';
        const path = servicesPath + request.service +'Service.js';

        try{
            fs.access(path, fs.F_OK, (err) => {
                if (err) {
                    response.status(422).json(err);
                }               
            });
         
        var Service = require("../../" + path);
        var action = request.action;

        var result = await Service[action](request);

       
        response.status(200).json(result);
          
        }catch(e){
          throw e;
        }

    }  
}

module.exports = new apiController;



