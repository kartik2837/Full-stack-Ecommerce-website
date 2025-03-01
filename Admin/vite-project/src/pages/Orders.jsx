// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { backendUrl, currency } from '../App'
// import { toast } from 'react-toastify'
// import { assets } from '../assets/assets'
// const Orders = ({ token }) => {
//     const [orders, setOrders] = useState([])
//     const fetchAllorders = async () => {

//         if (!token) {
//             return null;
//         }
//         try {
//             const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
//             if (response.data.success) {
//                 setOrders(response.data.orders)
//             } else {
//                 toast.error(response.data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)

//         }
//     }

//     useEffect(() => {
//         fetchAllorders()
//     }, [token])
//     return (
//         <div>
//             <h3>Order Page</h3>
//             <div>
//                 {
//                     orders.map((order, index) => (
//                         <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
//                             <img className='w-12' src={assets.parcel_icon} alt='' />
//                             <div>
//                                 <div>
//                                     {order.items.map((item, index) => {
//                                         if (index === order.items.length - 1) {
//                                             return <p className='py-0.5' key={index}>{item.name}x {item.quantity} <span>{item.size}</span></p>
//                                         }
//                                         else {
//                                             return <p className='py-0.5' key={index}>{item.name}x {item.quantity} <span>{item.size}</span></p>

//                                         }
//                                     })}
//                                 </div>
//                                 <p className='mt-3 mb-2 font-semibold'>{order.address.firstName + "" + order.address.lastName}</p>
//                                 <div>
//                                     <p>{order.address.street + ","}</p>
//                                     <p>{order.address.city + "," + order.address.state + "," + order.address.country + "," + order.address.pincode}</p>
//                                 </div>
//                                 <div>
//                                     <p>{order.address.Mobile}</p>
//                                 </div>
//                                 <div>
//                                     <p>Items:{order.items.length}</p>
//                                     <p>Method:{order.paymentMethod}</p>
//                                     <p>payment:{order.payment ? 'Done' : 'Pending'}</p>
//                                     <p>Date:{new Date(order.date).toDateString()}</p>
//                                 </div>
//                                 <p>{currency}{order.amount}</p>
//                                 <select>
//                                     <option value="OrderPlaced">Order Placed</option>
//                                     <option value="Packing">Packing</option>
//                                     <option value="Shipped">Shipped</option>
//                                     <option value="out for Delivery">Out for Delivery</option>
//                                     <option value="Delivered">Delivered</option>
//                                 </select>

//                             </div>

//                         </div>
//                     ))
//                 }
//             </div>

//         </div>
//     )
// }

// export default Orders










import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {
    const [orders, setOrders] = useState([])

    const fetchAllorders = async () => {
        if (!token) {
            return null;
        }
        try {
            const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
            if (response.data.success) {
                setOrders(response.data.orders.reverse())
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const statusHandler = async (event, orderId) => {
        try {
            const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: event.target.value }, { headers: { token } })
            if (response.data.success) {
                await fetchAllorders()
            }
        } catch (error) {
            console.log(error)
            toast.error(response.data.message)

        }

    }

    useEffect(() => {
        fetchAllorders()
    }, [token])

    return (
        <div className="container mx-auto py-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-5">Order Page</h3>
            <div className="space-y-6">
                {
                    orders.map((order, index) => (
                        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 border border-gray-200" key={index}>
                            <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start">
                                <img className="w-16 h-16 object-cover" src={assets.parcel_icon} alt="Parcel Icon" />
                                <div className="space-y-3">
                                    <div>
                                        {order.items.map((item, index) => (
                                            <p className="py-1 text-sm text-gray-700 font-semibold" key={index}>
                                                {item.name} x {item.quantity} <span className="text-red-500 text-xs font-semibold "> Size:{item.size}</span>
                                            </p>
                                        ))}
                                    </div>
                                    <p className="text-xl font-semibold">{order.address.firstName} {order.address.lastName}</p>
                                    <div className="text-sm text-gray-600">
                                        <p className='font-semibold'>Street: {order.address.street},</p>
                                        <p className='font-semibold'> City:{order.address.city}</p>
                                        <p className='font-semibold'>State: {order.address.state}</p>
                                        <p className='font-semibold'> Country: {order.address.country}</p>
                                        <p className='font-semibold'>Pincode: {order.address.pincode}</p>
                                        <p className='font-semibold text-black'>Mobile: {order.address.Mobile}</p>
                                    </div>
                                    <div className="mt-3 space-y-1">
                                        <p className="text-sm">Items: <span className="font-semibold">{order.items.length}</span></p>
                                        <p className="text-sm">Payment Method: <span className="font-semibold">{order.paymentMethod}</span></p>
                                        <p className="text-sm">Payment Status: <span className={order.payment ? 'text-green-500' : 'text-red-500'}>{order.payment ? 'Done' : 'Pending'}</span></p>
                                        <p className="text-sm">Date: {new Date(order.date).toDateString()}</p>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <p className="text-lg font-bold text-gray-800">{currency}{order.amount}</p>
                                        <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="p-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option className='font-semibold' value="OrderPlaced">Order Placed</option>
                                            <option className='font-semibold' value="Packing">Packing</option>
                                            <option className='font-semibold' value="Shipped">Shipped</option>
                                            <option className='font-semibold' value="out for delivery">Out for Delivery</option>
                                            <option className='font-semibold' value="Delivered">Delivered</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Orders;













