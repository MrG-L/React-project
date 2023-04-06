import './index.css';
import Skill from './components/Skill';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [level, setLevel] = useState('Mastered');
  const [skills, setSkills] = useState([
    {
      name: 'HTML',
      level: 'Mastered',
      img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--IVWVKZ0b--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oi03cmuyeesegovxmnrq.jpeg',
    },
    {
      name: 'CSS',
      level: 'Mastered',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcWyiKmvn3KtjEUB0VuBqQwtdypNZLI2EtZMB1se1MzewhEH2',
    },
    {
      name: 'JS',
      level: 'Learning in progress',
      img: 'https://blog.logrocket.com/wp-content/uploads/2021/01/javascript-record-tuple-proposal.png',
    },
    {
      name: 'NODE JS',
      level: 'Learning in progress',
      img: 'https://t2.gstatic.com/images?q=tbn:ANd9GcTSuTp4TVJFBJbbuFZIX-uD9ghdBd_0Z7qOn2eUS_XZpLVOoUkl',
    },
    {
      name: 'REACT',
      level: 'Learning in progress',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTnZ0ksmIlGQPOyLd_ua4X4UqkEFcr96sBWTrEu-qIN4AlkDOqk',
    },
    {
      name: 'GITHUB',
      level: 'Mastered',
      img: 'https://umaar.github.io/experiments/github-3d-logo/render-2.jpg',
    },
  ]);
  const showSkills = true;

  return (
    <div className="App">
      {showSkills ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setLevel(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {skills.map((skill) => {
              return (
                <Skill
                  key={uuidv4()}
                  name={skill.name}
                  level={skill.level}
                  img={skill.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the skills</p>
      )}
    </div>
  );
}

export default App;
