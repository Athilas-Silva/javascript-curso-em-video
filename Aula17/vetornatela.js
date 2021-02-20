let valores = [0, 1, 7, 4, 2, 9]

//Exibindo os valores com um loop
// for(let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

//Exibindo com for in
for( let pos in valores){
    console.log(`A poisção ${pos} tem o valor ${valores[pos]}`);
}