import ProjectItem from './ProjectItem';
import arneQuinze from '../assets/arne-quinze.png'
import future from '../assets/future.png'
import developer from '../assets/developer.png'
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#000]'>Projects</h1>
        <p className='text-center py-8'>Here are the projects that i made at school.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <a href="https://pgmgent-2021-atwork1.github.io/atwork-1_project_3-tolunay17/">
              <ProjectItem className="h-96 w-10" image={arneQuinze} title='Arne Quinze' description='This is a project that i made at school. It is a website for a company that sells furniture.'/>
            </a>
            <a href="https://tolunay17.github.io/future_island/">
              <ProjectItem image={future} title='Future' description='This is a project that i made at school. It is a website for a company that sells furniture.'/>    
            </a>
            <a href="https://tolunay17.github.io/developer_quiz/">
              <ProjectItem image={developer} title='Future' description='This is a project that i made at school. It is a website for a company that sells furniture.'/>    
            </a>
        </div>
    </div>
  )
}

export default Projects