import Constants from '../constant';

const Social = () => {
  const link = Constants.links;

  return (
    <div
      style={{
        padding: '10px 20px',
        fontSize: 16,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <p style={{ padding: '0px 10px' }}>
        <a href={link.FB}>Facebook</a>
      </p>
      <p style={{ padding: '0px 10px' }}>
        <a href={link.INSTA}>Instagram</a>
      </p>
      <p style={{ padding: '0px 10px' }}>
        <a href={link.GIT}>Github</a>
      </p>
      <p style={{ padding: '0px 10px' }}>
        <a href={link.LINKEDIN}>Linkedin</a>
      </p>
      <p style={{ padding: '0px 10px' }}>
        <a href={link.EMAIL}>Email</a>
      </p>
    </div>
  );
};

export default Social;
