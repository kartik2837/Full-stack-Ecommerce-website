import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../Component/RelatedProduct';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext)
    const [productData, setProductData] = useState(false)
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');
    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                setImage(item.image[0])
                return null;
            }
        })

    }
    useEffect(() => {
        fetchProductData()

    }, [productId])


    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />

                    </div>


                </div>
                {/*product information*/}
                <div className='flex-1'>
                    <h1 className='font-semibold text-2xl mt-2'>{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <p className='pl-2'>(126)</p>
                    </div>
                    <p className='mt-5 text-3xl font-semibold'>{currency}{productData.price}</p>
                    <p className='mt-5 text-black semibold md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {
                                productData.sizes.map((item, index) => (
                                    <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 font-bold hover:bg-blue-700 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                                ))
                            }

                        </div>

                    </div>
                    <button onClick={() => addToCart(productData._id, size)} className='bg-blue-700 text-white px-8 py-3 font-semibold text-sm active:bg-gray-700'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 font-semibold'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange within 7 Days</p>

                    </div>
                </div>

            </div>
            {/*description*/}

            <div className='mt-20'>
                <div className="flex ">
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <p className='border px-5 py-3 text-sm'>Reviews(125)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 font-semibold'>
                    <p>A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.</p>
                    <p>A product description is copy that informs potential customers about the product's benefits to convince them to buy. Great product descriptions give compelling reasons to consider making a purchase based on the needs of target customers. The “compelling reasons” are the main feature of strong product descriptions.</p>

                </div>

            </div>
            {/*display*/}
            <RelatedProduct category={productData.category} subCategory={productData.subCategory} />


        </div>
    ) : <div className='opacity-0'></div>

}

export default Product
