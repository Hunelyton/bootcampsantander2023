/* 

como declarar vetores e array



let array = ['string',1,true]
console.log(array)

*/
//pode guardar vários tipos de array

let array = ['string',1,true, ['array1'],['array2'],['array3'],['array4']];
/*console.log(array[3])*/



//forEach = intera um array
/*array.forEach(function(item, index){console.log(item,index)});*/


//push = additem no final do array
/*array.push('novoItem');
console.log(array);*/

//pop = remove item no final do array
/*array.pop();
console.log(array);*/

//shift = remove item no inicio do array
/*array.shift();
console.log(array);*/

//unshift = add item no inicio do array
/*array.unshift();
console.log(array);*/

//indexOf = retorna o indice de um valor
/*console.log(array.indexOf(true))*/

//splice = remove ou substitui um item pelo indice
/*array.splice(0, 3);
console.log(array);*/

//splice = retorna uma parte de um array existente
/*let novoArray = array.slice(0, 3);
console.log(novoArray);*/


/* 



*/
let object = { strig: 'string', Number: 1, Boolean: true, array:["array"], objectInterno: {objctInterno: 'objeto interno'}};
console.log(object.objectInterno);

var string = object.string;
console.log