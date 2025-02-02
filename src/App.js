import './output.css';
import Navbar from './Componets/Navbar/Navbar.jsx'
import React from 'react';
import headshot from './assets/headshot.JPG'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <section id='about-me' className='scroll-mt-16 py-12 bg-black text-white'>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
            <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">Hi, I'm <mark class="px-2 text-white bg-yellow-500 rounded-sm dark:bg-blue-500">Amara Williams</mark></h1>
            <p className='text-3xl'> I'm a passionate ScrumMaster with 2 years of hands-on experience within teams.
              I'm excited to embark on a new journey after I graduate with a B.S. in Computer Science in Spring 2025.
              <br/>
              <br/>
              I am currently and online instuctor, teaching programming languages and technical skills to students aged 7-19
              and will soon take part in a new program in my college as a peer academic coach.
              <br/>
              <br/>
              As a Scrum Master, I've restructured a research team, helping members understand the tech stack and 
              take ownership of tasks like creating tickets and fixing backend bugs. 
              I'm commited to crafting quality tutorials, comprehensive documentation,
              and developing impactful applications—both independently and as part of collaborative teams.
            </p>
            </div>
            <div className='col-span<4>'>
            <img className="w-3xl rounded-xl" src={headshot} alt="office content 1"/>
            </div>
                

        </div>
      </section>
    </div>
  );
}

export default App;
