import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[1]' src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1955&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/40'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg-items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Tolunay Kutlu</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Web Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Web Designer',
                    2000,
                    'Frontend Developer',
                    3000,
                    'Learner',
                    4000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft:'5px', display: 'inline-block' }}
                repeat={Infinity}
            /></h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaTwitter className='cursor-pointer' size={20}/>
                <FaGithub className='cursor-pointer' size={20}/>
                <FaLinkedin className='cursor-pointer' size={20}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main 