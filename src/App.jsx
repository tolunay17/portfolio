// import { useState } from 'react'
import Main from './components/Main'
import Projects from './components/Projects'
import SideNav from './components/Sidenav'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <div>
      <SideNav/>
      <Main/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default App
