import React from 'react'
import Title from '../Component/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Component/NewsletterBox'

const About = () => {
    return (
        <div>

            <div className='text-2xl text-center pt-8 border-t'>

                <Title text1={'ABOUT'} text2={'US'} />

            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 font-semibold'>
                    <p>E-commerce is the buying and selling of goods and services over the internet. It is conducted over computers, tablets, smartphones, and other smart devices. Almost anything can be purchased through e-commerce today, and it has lowered the barriers to entry for many types of businesses, such as retailers.</p>
                    <p>E-commerce is the buying and selling of goods and services over the internet. It is conducted over computers, tablets, smartphones, and other smart devices. Almost anything can be purchased through e-commerce today, and it has lowered the barriers to entry for many types of businesses, such as retailers.</p>
                    <b className='text-gray-800 font-semibold'>Our Mission</b>
                    <p>A well-crafted mission statement for an eCommerce business helps establish a strong brand identity, foster a unified company culture, and ensure alignment among team members, stakeholders, and customers.</p>

                </div>

            </div>
            <div className='text-4xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />

            </div>
            <div className='flex flex-col sm:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <p className='font-semibold'>Quality Assurance:</p>
                    <p className='text-gray-700'>
                        E-commerce quality assurance refers to the set of activities carried out to ensure that products and services provided by online businesses meet the expected quality standards.</p>

                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <p className='font-semibold text-red-600'>Convenience:</p>
                    <p className='text-gray-700'>
                        E-commerce quality assurance refers to the set of activities carried out to ensure that products and services provided by online businesses meet the expected quality standards.</p>

                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <p className='font-semibold'>Exceptional customer service:</p>

                    <p className='text-gray-700'>Ecommerce customer service is the dedicated support process that assists online shoppers throughout their buying journey. The aim is to proactively offer support channels and promptly address customer inquiries and issues and build strong brand image.</p>

                </div>

            </div>
            <NewsletterBox />
        </div>
    )
}

export default About
