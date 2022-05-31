import Constants from '../constant';

const Experience = () => {
  const exp = Constants?.experience;

  return (
    <div style={{ padding: '10px 0', fontSize: 16, fontWeight: 500 }}>
      <ul>
        <li style={{ lineHeight: 1.7 }}>
          {exp.sabay}
          <span> From {exp.sabay_year}</span>
        </li>
        <li style={{ lineHeight: 1.7, padding: '10px 0' }}>
          {exp.yes_web}
          <span> From {exp.yes_year}</span>
        </li>
        <li style={{ lineHeight: 1.7 }}>
          {exp.pim_click}
          <span> From {exp.pim_year}</span>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
