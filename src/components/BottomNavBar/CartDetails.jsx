import React from 'react'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'
import AddQuantityIncrementDecrementBtn from '../ProductList/AddQuantityIncrementDecrementBtn'
import classes from "./CartDetails.module.css"

const CartDetails = (props) => {
  const cartCtx=useContext(CartContext);
  const cartItemRemovehandler=id=>{
    cartCtx.removeItem(id)
  }
  const cartItemAddhandler=item=>{
    cartCtx.addItem({...item,amount:1})
  }
  return (
    <>
      {props.clicked && <div className={classes.cartdetails}>
        <div className={classes.title}>
          <h4 className={classes.cartHeading}>Cart Details</h4>
          <i class={`fa-solid fa-lg fa-xmark ${classes.cross}`}></i>
        </div>
        <div className={classes.orderItems}>
          <div className={classes.heading}>
            <p className={classes.items}>Items</p>
            <p className={classes.qtys}>Quantity</p>
            <p className={classes.amounts}>Amount</p>
          </div>
          {cartCtx.items.map(item=>(
            <div className={classes.data} key={item.id}>
              <p className={classes.item}>{item.name}</p>
              <p className={classes.qty}>
              <div className={classes.IncrementDecrementBtn}>
                <button className={classes.decbtn}  onClick={cartItemRemovehandler.bind(null,item.id)}>-</button>
                {item.amount}
                <button className={classes.incbtn} onClick={cartItemAddhandler.bind(null,item)}>+</button>
              </div>
              </p>
              <p className={classes.amount}>Rs. {item.price}</p>
            </div>
          ))}
        </div>
        <div className={classes.orderTotal}>
          <p className={classes.total}>Total</p>
          <p className={classes.totalamt}>Rs. {cartCtx.totalAmount}</p>
        </div>
      </div>}
    </>
  )
}

export default CartDetails