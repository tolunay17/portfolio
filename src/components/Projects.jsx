import React from 'react'
import ProjectItem from './ProjectItem';
import developer from '../assets/developer.png'
import arneQuinze from '../assets/arne-quinze.png'
import future from '../assets/future.png'
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#000]'>Projects</h1>
        <p className='text-center py-8'>Here are the projects that i made at school.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem image={developer} title='Developer' description='This is a project that i made at school. It is a website for a company that sells computers.'/>
            <ProjectItem image={arneQuinze} title='Arne Quinze' description='This is a project that i made at school. It is a website for a company that sells furniture.'/>
            <ProjectItem image={future} title='Future' description='This is a project that i made at school. It is a website for a company that sells furniture.'/>    
        </div>
    </div>
  )
}

export default Projects