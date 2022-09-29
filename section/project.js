import { Tabs } from 'antd';
import { CodeSandboxOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { Col, Row } from 'antd';

const { TabPane } = Tabs;
const style = {
  background:
    'linear-gradient(to right top, #051937, #38245a, #77216c, #b70767, #eb124b)',
};
const Project = () => (
  <Tabs style={{ padding: '10px 25px' }} defaultActiveKey="1" centered>
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
        <Row
          gutter={{
            xs: 12,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row" span={8}>
            <div style={style}>
              <Image
                style={{ padding: '5px 10px' }}
                width={200}
                src="../assets/img/NSIS.png"
              />
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={style}>
              {' '}
              <Image
                style={{ padding: '5px 10px' }}
                width={200}
                src="https://msphanith.github.io/myblog/assets/img/portfolio/PPCov.png"
              />
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={style}>
              <Image
                style={{ padding: '5px 10px' }}
                width={200}
                src="https://msphanith.github.io/myblog/assets/img/portfolio/PPCover.png"
              />
            </div>
          </Col>
        </Row>
        <Row
          gutter={{
            xs: 12,
            sm: 16,
            md: 24,
            lg: 32,
          }}
          style={{ marginTop: 10 }}
        >
          <Col className="gutter-row" span={8}>
            <div style={style}>
              <Image
                style={{ padding: '5px 10px' }}
                width={200}
                src="https://msphanith.github.io/myblog/assets/img/portfolio/IAF.png"
              />
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={style}>
              {' '}
              <Image
                style={{ padding: '5px 10px' }}
                width={200}
                src=" https://msphanith.github.io/myblog/assets/img/portfolio/BRIT.png"
              />
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={style}>
              <Image
                style={{ padding: '5px 10px' }}
                width={200}
                src=" https://msphanith.github.io/myblog/assets/img/portfolio/Novo.jpg"
              />
            </div>
          </Col>
        </Row>
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
      <Row
        gutter={{
          xs: 12,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Image
              style={{ padding: '5px 10px' }}
              width={200}
              src="https://msphanith.github.io/myblog/assets/img/portfolio/app.jpg"
            />
          </div>
        </Col>
      </Row>
    </TabPane>
  </Tabs>
);

export default Project;
