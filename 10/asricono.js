const fs = require('fs')
 
console.log('inicio')

  
fs.writeFile("arquivo.txt", 'oi', function(err){
    setTimeout(function () {
        console.log('Arquivo escrito')
        
    }, 1000)
})
 console.log('fim');
 