import { useState } from 'react';
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'; 
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const SideNav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    console.log('working?')
  }
  
  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
        { nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a onClick={handleNav}
          href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav}
             href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrProjects size={20}/>
              <span className='pl-4'>Work</span>
            </a>
            <a onClick={handleNav} 
            href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20}/>
              <span className='pl-4'>Projects</span>
            </a>
            <a onClick={handleNav} 
            href='#skills' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20}/>
              <span className='pl-4'>Skills</span>
            </a>
            <a onClick={handleNav}
             href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20}/>
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        )
        : (
          <div></div>
        )}
        <ul className='md:block hidden fixed top-[10%] z-10'>
          <li className='flex flex-col'>
            <a href="#main" className='rounded-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHome size={25}/>
            </a>
          </li>
          <li className='flex flex-col'>
            <a href="#projects" className='rounded-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
              <GrProjects size={25}/>
            </a>
          </li>
          <li className='flex flex-col'>
            <a href="#project" className='rounded-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineProject size={25}/>
            </a>
          </li>
          <li className='flex flex-col'>
            <a href="#skills" className='rounded-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsPerson size={25}/>
            </a>
          </li>
          <li className='flex flex-col'>
            <a href="#contact" className='rounded-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={25}/>
            </a>
          </li>
        </ul>





    </div>
  )
}

export default SideNav