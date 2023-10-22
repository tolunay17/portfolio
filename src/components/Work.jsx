import React from 'react'
import WorkItem from './WorkItem';

const data = [
  {
    year: '2023',
    title: 'Job',
    position: 'Searching for a job',
    description: 'Looking for a job in the field of web development'
  },
  {
    year: '2022',
    title: 'School',
    position: 'Student',
    description: 'Third year of school'
  },
  {
    year: '2021',
    title: 'School',
    position: 'Student',
    description: 'Second year of school'
  },
  {
    year: '2019',
    title: 'School',
    position: 'Student',
    description: 'First year of school'
  }
]

const Work = () => {
  return (
    <>
    <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#000]'>Work</h1>
        {data.map((item, index) => (
          <WorkItem key={index} year={item.year} title={item.title} position={item.position} description={item.description}/>
        ))}
    </div>
    </>
  )
}

export default Work