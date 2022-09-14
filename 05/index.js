//nome 
///ler argumentos da linha de comando


console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]
 console.log(nome)


 //mateus como string

 const idade = args[1].split('=')[1]
 console.log(idade)

 console.log("ele se chama $(nome) e tem $(idade) anos")
 
