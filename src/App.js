import Products from './Components/Products'
import Carrito from './Components/Carrito'
import {useState} from 'react'

function App() {
  const [listProducts, setListProducts] = useState([
    {id:1, name:'manzana', price:3},
    {id:2, name:'pera', price:2},
    {id:3, name:'durazno', price:4},
    {id:4, name:'papaya', price:3}
  ])
  const [car, setCar] = useState([])
  return (
    <div>
       <h2>Lista de los productos</h2>
       
       {
         listProducts.map((product)=>
          <Products 
          key={product.id}
          product={product}
          listProducts={listProducts}
          car={car}
          setCar={setCar}
          />
          
         )
       }
       <Carrito 
       car={car}
       setCar={setCar}
       />
    </div>
  );
}

export default App;
