import Constants from '../constant';

const About = () => {
  const About = Constants.about.About;

  return (
    <div style={{ padding: '10px 20px', fontSize: 16, fontWeight: 500 }}>
      <p>{About}</p>
    </div>
  );
};

export default About;
