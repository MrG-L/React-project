function Skill(props) {
  return (
    <>
      <h3>Skillset: {props.name}</h3>
      <p>Utility: {props.utility}</p>
      <p>Level: {props.level ? props.level : 'Learning in Progress'}</p>
    </>
  );
}

export default Skill;
