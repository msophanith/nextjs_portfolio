import Constants from '../constant';
import { Timeline } from 'antd';

const Education = () => {
  const edu = Constants?.education;

  return (
    <Timeline style={{ padding: '10px 20px', fontSize: 16, fontWeight: 500 }}>
      <Timeline.Item color="green">
        <p>{edu.ITC}</p>
        <p>{edu.DEG_ITC}</p>
      </Timeline.Item>
      <Timeline.Item color="#b31e23">
        <p>{edu.RMU}</p>
        <p>{edu.DEG_RMU}</p>
      </Timeline.Item>
      <Timeline.Item color="#195a82">
        <p>{edu.RSU}</p>
        <p>{edu.DEG_RSU}</p>
      </Timeline.Item>
    </Timeline>
  );
};

export default Education;
