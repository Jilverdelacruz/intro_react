let articulos={
    nombre:'sandía',
    precio:5,
    cantidad:2,
    otro:{
        otro1:'aa',
        otro2:'bb'
    },
    agregar(){
       return `El nombre es${this.nombre} y cuesta ${this.precio}` 
    }
}

console.log(articulos.agregar())
