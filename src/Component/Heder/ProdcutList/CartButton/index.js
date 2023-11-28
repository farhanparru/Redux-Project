import React, { useMemo } from 'react'
import BeforeCart from './BeforeCart'
import AfterCart from './AfterCart'
import { useSelector } from 'react-redux'

const CartButton = ({ product}) => {
    const {cartList} = useSelector((state)=> state.cart)
    
    const cartCount = useMemo(()=>{
        console.log(cartList, "==cartList");
       return cartList?.find((item)=> item?.id === product?.id)?.count;
    },[cartList])

    console.log(cartCount, "==cartCount");
  
       return <>{ cartCount > 0 ? <AfterCart productId={product?.id} cartCount={cartCount}/> :<BeforeCart product={product}/>}</>
}

export default CartButton
