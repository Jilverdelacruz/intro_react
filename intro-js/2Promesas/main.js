
const aplicarDescuuento = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let descuento=true // si colocas false  arrojará el no se ha .....
        if(descuento){
            resolve(' se ha aprobado el descuento')
        }else{
            reject('NO!! se ha aprobado el descuento')
        }
        
    }, 3000)
})

aplicarDescuuento.then(resol=>{ // .then hace referencia a la espera ya que primero tiene que ejecutarse lo que estádentro de la promesa
    console.log(resol)
    console.log('la prueba ha finazalido')
}).catch(error =>{
    console.log(error) // por ejemplo si cambiar la variable descuento te mandará el error
})