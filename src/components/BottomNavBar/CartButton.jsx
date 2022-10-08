import React, { useState } from 'react'
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const cartCtx=useContext(CartContext)
    const [isclick,setIsClick]=useState(false);

    const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
      return curNumber+item.amount
    },0)

    function handleClick(event){
        setIsClick(!isclick)
        event.preventDefault();
    }
    props.clicked(isclick)
  return (
    <div className={classes.cartButton}>
        <div className={classes.btn}>
            {numberOfCartItems} Item(s)<br />Total Rs. {cartCtx.totalAmount}
        <button className={classes.arrowbtn} onClick={handleClick}><i class={isclick ? `fa-solid fa-xsm fa-angle-down ${classes.arrowup}` : `fa-solid fa-xsm fa-angle-up ${classes.arrowup}`}></i></button>
        </div>
    </div>
  )
}

export default CartButton