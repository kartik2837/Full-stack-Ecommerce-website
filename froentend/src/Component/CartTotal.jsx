import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)
    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />

            </div>
            <div className='flex justify-between'>
                <p className='font-semibold'>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>

            </div>
            <hr />
            <div className='flex justify-between'>
                <p className='font-semibold'>Shipping Fee</p>
                <p className='font-semibold'>{currency}{delivery_fee}.00</p>

            </div>
            <hr />
            <div className='flex justify-between'>
                <b className='font-semibold text-red-600'>Total</b>
                <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>

            </div>

        </div>
    )
}

export default CartTotal
