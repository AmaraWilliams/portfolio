import './output.css';

import React from 'react';
import headshot from './assets/headshot.JPG'
import Navbar from './Componets/Navbar/Navbar'
import logo from "./assets/amara-logo.png"



function App() {
  return (
    <div className="App">
      <header>
        <title> Amara Williams </title>
        <link rel="icon" type="image/png" href={logo}></link>
       
      </header>
      
      <body>
      <Navbar/>
      <section id='about-me' className='scroll-mt-16 max-h-auto py-12 bg-black text-white'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-8xl'>
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
            <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
              <h1 class="mb-4 text-2xl font-extrabold dark:text-white md:text-5xl lg:text-6xl">Hi, I'm <br/><span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-orange-200">Amara Williams</span></h1>
              <p className='text-2xl'> I'm a passionate ScrumMaster with 2 years of hands-on experience within teams.
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
              <div className='col-span<1>'>
              <img className="w-3xl rounded-xl" src={headshot} alt="office content 1"/>
              </div>
          </div>    

        </div>
      </section>
      </body>
    </div>
  );
}

export default App;
