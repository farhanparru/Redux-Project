
import products from "../../../api/products.json"
import '../../../api/product.css'
import { useSelector, useDispatch } from 'react-redux';  
import CartButton from './CartButton'

const Productlist = () => {
  const {cartList} = useSelector((state)=> state.cart)
  console.log(cartList);
 
   
  return (
  <section className='container'>
{products.map((product,key)=>(
    <div className='product-container' key={key}>
  <img src={product?.image} />
  <h3>{product?.title}</h3>
<CartButton product={product}/> 
   
 
    </div>
))}
  </section>
  )
}


export default Productlist
