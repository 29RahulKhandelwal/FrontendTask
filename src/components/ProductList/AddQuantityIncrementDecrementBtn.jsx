import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import classes from "./AddQuantityIncrementDecrementBtn.module.css"

const AddQuantityIncrementDecrementBtn = (props) => {
  const {data}=props;
  const cartCtx=useContext(CartContext)
  const [count,setCount]=useState(0);
  const [isCount,setIsCount]=useState(false);

  function handleAdd(){
    setIsCount(true)
    setCount(1)
    cartCtx.addItem({
      id:data.id,
      name:data.foodName,
      amount:1,
      price:data.currentPrice
    })
  }

  const cartItemRemovehandler=id=>{
    cartCtx.removeItem(id)
  }
  const cartItemAddhandler=item=>{
    cartCtx.addItem({...item,amount:1})
  }
  let check;
  if(data?.id){
    check=cartCtx.items.find(item=>item.id===data?.id)
  }

  useEffect(()=>{
    if(count<1){
      setIsCount(false)
    }
  },[count])
  
  return (
    <>
      {!isCount && <button className={classes.AddQuantity} onClick={handleAdd}>ADD</button>}

      {isCount && <div className={classes.IncrementDecrementBtn}>
        <button className={classes.decbtn}  onClick={cartItemRemovehandler.bind(null,data.id)}>-</button>
        {check ? check.amount  : count}
        <button className={classes.incbtn} onClick={cartItemAddhandler.bind(null,{
          id:data.id,
          name:data.foodName,
          amount:count,
          price:data.currentPrice
        })}>+</button>
      </div>}
    </>
  )
}

export default AddQuantityIncrementDecrementBtn