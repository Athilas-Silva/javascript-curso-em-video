let num = [5, 8, 4]
//adicionando mais elementos na array
//num[3] = 6
num.push(1)

//comprimento da array
//num.length

//colocando array em ordem crescente
num.sort()

//exebindo o array
console.log(num)
console.log(` O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//exibindo pelo método indexof
let pos = num.indexOf(5)
if(pos == -1){
    console.log(`O valor nao foi encontrado`)
}
else{
    console.log(`O valor está na poisção ${pos}`)
}