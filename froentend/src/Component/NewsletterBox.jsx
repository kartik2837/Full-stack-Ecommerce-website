import React from 'react'

const NewsletterBox = () => {
    const onsubmithandler = (event) => {
        event.preventDefault();
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-semibold text-gray-700'>Subscribe now & get 50% off</p>
            <p className='text-black mt-3'>e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.</p>
            <form onSubmit={onsubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your Email' required />
                <button className='bg-blue-700 text-white text-xs px-10 py-4 font-semibold'>Subscribe</button>

            </form>

        </div>
    )
}

export default NewsletterBox
