import React from 'react'
import { Link } from "react-router-dom"
import classes from "./Checkout.module.css"
import AddQuantityIncrementDecrementBtn from '../ProductList/AddQuantityIncrementDecrementBtn'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'

const Checkout = () => {
  const cartCtx=useContext(CartContext)
  const cartItemRemovehandler=id=>{
    cartCtx.removeItem(id)
  }
  const cartItemAddhandler=item=>{
    cartCtx.addItem({...item,amount:1})
  }
  return (
    <div className={classes.cartdetails}>
        <div className={classes.main}>
          <Link to="/" className={classes.back}>
            <i class={`fa-solid fa-2x fa-arrow-left-long`}></i>
          </Link>
          <h4 className={classes.mainHeading}>Checkout</h4>
        </div>
        <div className={classes.title}>
          <h4 className={classes.cartHeading}>PICK UP</h4>
        </div>
        <div className={classes.pickupAddress}>
          Test<br/>Daalchini Office Noida Uttar Pradesh<br/>Order Expires within 30mins
        </div>
        <div className={classes.title}>
          <h4 className={classes.cartHeading}>CART DETAILS</h4>
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
          <p className={classes.totalamt}>Rs. 1</p>
        </div>
        <div className={classes.bottomNavbar}>
          <Link to="/OrderConfirmed" className={classes.links}>
            <p className={classes.payment}>Select Payment</p>
            <i class={`fa-solid fa-2x fa-arrow-right-long ${classes.rightarrow}`}></i>
          </Link>
        </div>
      </div>
      
  )
}

export default Checkout