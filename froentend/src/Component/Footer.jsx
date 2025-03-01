import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32 text-2xl font-semibold' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        An e-commerce website is one that allows people to buy and sell physical goods,services,and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
                    </p>

                </div>
                <div>
                    <p className='text-xl font-semibold mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-black font-semibold'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>

                    </ul>
                </div>
                <div>
                    <p className='text-xl font-semibold mb-5'>GET IN TOUCH</p>
                    <li className='font-semibold'> Contact: +91 9027104212</li>
                    <li className='font-semibold'>KartikBhadouria674@gmail.com</li>
                    <li className='font-semibold'>Alt: +91 8057597093</li>
                </div>

            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center font-semibold'>Copyright@2025 www.Shoplin.com</p>
            </div>

        </div>
    )
}

export default Footer
