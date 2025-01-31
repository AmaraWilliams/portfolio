import './App.css';
import Navbar from './Componets/Navbar/Navbar'
import React from 'react';
import headshot from './assets/headshot.JPG'
import Card from './Componets/Card/Card'

const introContent = () => {
  return (
    <div id='intro'>
      <h1> Hi, I Am 
        <div id='name'> Amara Williams </div>
      </h1>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Card
        image = {headshot}
        imgWidth = {400}
        imgHeight = {400}
        content = {introContent}
      />
      
        
    </div>
  );
}

export default App;
