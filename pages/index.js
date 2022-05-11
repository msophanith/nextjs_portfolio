import { Row } from 'antd';
import { Layout } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { Divider } from 'antd';
import About from '../section/about';
import Experience from '../section/experience';
import Education from '../section/education';
import Award from '../section/award';
import Social from '../section/social';

const Home = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: '#FFF',
          color: '#000',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1>Jay</h1>
      </Header>
      <Content
        style={{
          height: '100%',
          backgroundColor: '#FFF',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Row>
          <div className="content">
            <About />
            <Divider orientation="left" plain>
              <h1>Experiences</h1>
            </Divider>
            <Experience />
            <Divider orientation="left" plain>
              <h1>Education</h1>
            </Divider>
            <Education />
            <Divider orientation="left" plain>
              <h1>Awards</h1>
            </Divider>
            <Award />
            <Divider orientation="left" plain>
              <h1>Links</h1>
            </Divider>
            <Social />
          </div>
        </Row>
      </Content>
      <Footer style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          Made with <HeartFilled />
        </span>
        <span>{new Date().getFullYear()}, © Jay.</span>
      </Footer>
    </Layout>
  );
};

export default Home;
