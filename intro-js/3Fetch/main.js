const poke= document.querySelector('#poke')
console.log(poke)
function linkImg(link){
    poke.setAttribute('src', link)
}
/* 
fetch('json/poke.json', {
     method='GET' POR DEFECTO VIENE EL MÉTODO GET
})
.then((response)=> {
    /* debugger   en la parte de source vere en la parte url: que es un JSON
 return  response.json() 
}).then(data=> {
     debugger en la parte de source vera el json de la data 
   linkImg(data.image)
})  */
/* fetch('img/squirtle.png',{})
.then(response=> response.blob())  // como es una imagen tengo que manipular con blob, exise formData arrayBuffer
.then(data=>{
    const linkPoke= URL.createObjectURL(data)
    linkImg(linkPoke)
}) */
fetch('https://pokeapi.co/api/v2/pokemon/25',{})
.then(response=> response.json())
.then(pokemon=>{
    linkImg(pokemon.sprites.front_default)
})