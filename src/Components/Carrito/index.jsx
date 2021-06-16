import '../../carrito.css'
import Products from '../Products'

const Carrito = ({car,setCar})=>(
    <div className='carrito'>
        <h3>Productos Seleccionados</h3>
       {
           car.length === 0
           ?
           <p>No hay un producto seleccionado</p>
           : car.map(product=> 
           <Products
           key={product.id} 
           product={product}
           car={car}
           setCar={setCar}
           />
           )
       }
        
    </div>
)
export default Carrito