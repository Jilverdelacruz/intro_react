//object literal
let articulos={
    nombre:'sandía',
    precio:5,
    cantidad:2
}
const {nombre, precio, cantidad} = arti
console.log(articulos)

//object constructor
function Articulos(nombre, precio, cantidad){ // POR ESTÁNDAR EL NOMBRE DEL OBJETO ES CON MAYÚSCULA
    this.nombre=nombre
    this.precio=precio
    this.cantidad=cantidad
}

Articulos.prototype.mostrarArticulos= function(){  
    return `El producto demandado es ${this.nombre} y la cantidad es de ${this.cantidad}` 
}


const articuloHombre= new Articulos('camisa', 5, 3)
const articuloMujer= new Articulos('blusa', 2, 7)
/* console.log(articuloHombre)
console.log(articuloMujer) */
const articulosPeques= new Articulos('babero', 1, 5)
console.log(articulosPeques.mostrarArticulos())
// resultado: Articulos {nombre: "camisa", precio: 5, cantidad: 3} se crea un nombre para el objeto

//Destructuring