import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center- p-4'>
            <form method='post' action="https://getform.io/f/5add3c5f-de27-4246-96a5-425cd02944a8" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ff008c] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>&#47;&#47; Submit the form below or shoot me an email - senthilroyan@gmail.com</p>
                    <input className='bg-[#ccd6f6] p-2 rounded-lg w-full ' type='text' placeholder='Name' name='name' />
                    <input className='bg-[#ccd6f6] my-4 p-2 rounded-lg w-full ' type='email' placeholder='Email' name='email' />
                    <textarea className='bg-[#ccd6f6] w-full' name="message" id="" cols="30" rows="10" placeholder='Message' ></textarea>
                    <button className='text-white border-2 hover:bg-[#ff008c] hover:border-[#ff008c] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                </div>
            </form >
        </div >
    )
}

export default Contact