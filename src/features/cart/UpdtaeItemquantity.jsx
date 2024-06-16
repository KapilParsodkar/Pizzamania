import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

function UpdtaeItemquantity({pizzaId,cuq}) {
const dispatch=useDispatch()
  return (
<div className='flex gap-1 items-center md:gap-3'>
<Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
<span>{cuq}</span>
<Button type="round" onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
</div>
  )
}

export default UpdtaeItemquantity