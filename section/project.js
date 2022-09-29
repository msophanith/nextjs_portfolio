import { Tabs } from 'antd';
import { CodeSandboxOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import nsis from '../assets/img/NSIS.png';

const { TabPane } = Tabs;

const Project = () => (
  <Tabs style={{ padding: '10px 25px' }} defaultActiveKey="1">
    <TabPane
      tab={
        <span>
          <CodeSandboxOutlined />
          Website
        </span>
      }
      key="1"
    >
      <Image.PreviewGroup>
        <Image style={{ padding: '5px 10px' }} width={200} src={nsis} />
        <Image
          style={{ padding: '5px 10px' }}
          width={200}
          src="https://msphanith.github.io/myblog/assets/img/portfolio/PPCov.png"
        />
        <Image
          style={{ padding: '5px 10px' }}
          width={200}
          src="https://msphanith.github.io/myblog/assets/img/portfolio/PPCover.png"
        />
        <Image
          style={{ padding: '5px 10px' }}
          width={200}
          src="https://msphanith.github.io/myblog/assets/img/portfolio/IAF.png"
        />
        <Image
          style={{ padding: '5px 10px' }}
          width={200}
          src=" https://msphanith.github.io/myblog/assets/img/portfolio/BRIT.png"
        />
        <Image
          style={{ padding: '5px 10px' }}
          width={200}
          src=" https://msphanith.github.io/myblog/assets/img/portfolio/Novo.jpg"
        />
      </Image.PreviewGroup>
    </TabPane>
    <TabPane
      tab={
        <span>
          <AppstoreAddOutlined />
          App
        </span>
      }
      key="2"
    >
      <Image
        style={{ padding: '5px 10px' }}
        width={200}
        src="https://msphanith.github.io/myblog/assets/img/portfolio/app.jpg"
      />
    </TabPane>
  </Tabs>
);

export default Project;
