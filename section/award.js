import Constants from '../constant';

const Award = () => {
  const awd = Constants?.award;

  return (
    <div style={{ padding: '10px 0', fontSize: 16, fontWeight: 500 }}>
      <ul>
        <li>
          {awd.KH}: {awd.TYPE_ITC}
        </li>
        <li style={{ lineHeight: 1.7, padding: '10px 0' }}>
          {awd.KH}: {awd.TYPE_RUPP}
        </li>
        <li style={{ lineHeight: 1.7 }}>
          {awd.TH}: {awd.TYPE_RSU}
        </li>
      </ul>
    </div>
  );
};

export default Award;
