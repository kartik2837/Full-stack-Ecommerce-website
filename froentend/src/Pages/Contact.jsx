import React from 'react'
import Title from '../Component/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Component/NewsletterBox'

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={'Contact'} text2={'Us'} />

            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                    <p className='font-semibold text-xl text-red-700'>30A Harlal Pura Tahsil: Bah <br /> District: (AGRA) Pincode: 283104 (U.P) INDIA</p>
                    <p className='font-semibold text-xl text-black'>Phone: 9027104212 <br />Email: kartik654@gmail.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Career at Shoplin</p>
                    <p className='text-gray-600'>Learn more About our teams and job openings.</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-red-600 hover:text-white transition-all duration-500 font-semibold'>Explore Jobs</button>

                </div>

            </div>
            <NewsletterBox />

        </div>
    )
}

export default Contact
