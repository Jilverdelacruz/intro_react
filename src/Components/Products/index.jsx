
const Products = ({product, listProducts, car, setCar})=>{
   const selection = (id)=>{
       const product= listProducts.filter(product => product.id === id)[0]
       setCar([...car, product])
   }
   const deleteProduct= id =>{
       const products= car.filter(product => product.id !== id)
       setCar(products)
   }
    return(
        <>
            <p>{product.name}</p>
            <p>s/.{product.price}</p>
            {listProducts
            ? <button onClick={()=>selection(product.id)}>Comprar</button>
            :<button onClick={()=>deleteProduct(product.id)}>Eliminar</button>
            }
            
        </>
    )
}
export default Products;