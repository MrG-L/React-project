import './index.css';
import Skill from './components/Skill';
import html from './assets/html.jpg';
import css from './assets/css.jpg';
import react from './assets/react.jpg';
import nodejs from './assets/nodejs.jpg';
import javascript from './assets/javascript.jpg';
import github from './assets/github.jpg';

function App() {
  const showSkills = true;
  return (
    <div className="App">
      {showSkills ? (
        <>
          <div className="flex flex-wrap justify-center">
            <Skill name="HTML" level="Mastered" img={html} />
            <Skill name="CSS" level="Mastered" img={css} />
            <Skill name="GITHUB" level="Mastered" img={github} />
            <Skill name="JS" level="Learning in progress" img={javascript} />
            <Skill name="NODE JS" level="Learning in progress" img={nodejs} />
            <Skill name="REACT" level="Learning in progress" img={react} />
          </div>
        </>
      ) : (
        <p>You cannot see the skills</p>
      )}
    </div>
  );
}

export default App;
