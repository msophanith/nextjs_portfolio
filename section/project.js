import Constants from '../constant';

const Project = () => (
  <div
    style={{ margin: '0px auto', display: 'flex', justifyContent: 'center' }}
  >
    <p>
      See My Projects{' '}
      <a
        style={{ background: 'yellow' }}
        target="/"
        href={Constants.links.PROJECTS}
      >
        Click Here
      </a>
    </p>
  </div>
);

export default Project;
