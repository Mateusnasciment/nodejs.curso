///sync e async
const fs = require('fs');

 console.log('inicio');
 
    fs.readFile("arquivo.txt", function(err, data){
        console.log(data.toString())
    } )
