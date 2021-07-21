let articulos={
    nombre:'sandía',
    precio:5,
    cantidad:2,
    otro:{
        otro1:'aa',
        otro2:'bb'
    }
}

//destructuring
const {nombre, precio, cantidad} = articulos
const {otro1} = articulos.otro // ingresando al obejtro dentro de otro objeto
console.log(nombre)
console.log(otro1)

//Object Literal Enhacement
 const precio2= 5
 const nombre2= 'manzana'
 const cantidad2=2

 const articulo ={precio2, nombre2, cantidad2} // agrega valores a un objeto
 console.log(articulo)