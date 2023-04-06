import './App.css';
import Skill from './components/Skill';

function App() {
  const showSkills = true;
  return (
    <div className="App">
      {showSkills ? (
        <>
          <Skill
            name="HTML"
            utility="HTML is the standard markup language for documents designed to be displayed in a web browser."
            level="Mastered"
          />
          <Skill
            name="CSS"
            utility="CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
            level="Mastered"
          />
          <Skill
            name="JS"
            utility="JS is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS"
          />
          <Skill
            name="NODE JS"
            utility="Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser."
          />
          <Skill
            name="REACT"
            utility="React is a free and open-source front-end JavaScript library for building user interfaces based on components."
          />
        </>
      ) : (
        <p>You cannot see the skills</p>
      )}
    </div>
  );
}

export default App;
