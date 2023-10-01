// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

console.log('Hello World')

// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

var sum = function(number1, number2){
let total = number1 + number2
return total
// }

let number1 = 10
let number2 = 30

console.log(`A soma total é ${sum(number1, number2)}`)

// 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let number = ""

console.log(typeof number && number ? 'É um numero' : 'Não é numero' )

4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let number = ""

console.log(typeof number >= number ? 'É uma string' : 'Não é string' )

// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let temperature = 1
let highTemperature = temperature === true
let mediumTemperature = temperature === false

if(highTemperature){
  console.log('É um boleeano')
} else if(mediumTemperature){
  console.log('É um boleeano')
} else{
  console.log('Não é boleeano')
}

// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let sub = function(number1, number2){
let total = number1 - number2
return total
}

let number1 = 60
let number2 = 20

console.log(`A resultado total é ${sub(number1, number2)}`)

// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

var mult = function(number1, number2){
let total = number1 * number2
return total
}

let number1 = 60
let number2 = 20

console.log(`A resultado total é ${mult(number1, number2)}`)

// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

var div = function(number1, number2){
let total = number1 / number2
return total
}

let number1 = 10
let number2 = 2

console.log(`A resultado total é ${div(number1, number2)}`)

// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let number = 3

if(number % 2 == 0){
  console.log('É um número par')
}else {
  console.log('Não é um número par')
}

// 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let number = 351

if(number % 2 == 1){
  console.log('É um número ímpar')
}else {
  console.log('Não é um número ímpar')
}