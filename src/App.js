import './index.css';
import Skill from './components/Skill';
import { useState } from 'react';

function App() {
  const showSkills = true;
  return (
    <div className="App">
      {showSkills ? (
        <>
          <div className="flex flex-wrap">
            <Skill
              name="HTML"
              level="Mastered"
              img="https://images.unsplash.com/photo-1632882765546-1ee75f53becb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Skill name="CSS" level="Mastered" />
            <Skill name="JS" level="Learning in progress" />
            <Skill name="NODE JS" level="Learning in progress" />
            <Skill name="REACT" level="Learning in progress" />
          </div>
        </>
      ) : (
        <p>You cannot see the skills</p>
      )}
    </div>
  );
}

export default App;
