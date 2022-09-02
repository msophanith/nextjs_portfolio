import { Row } from 'antd';
import { Layout } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Divider } from 'antd';
import About from '../section/about';
import Experience from '../section/experience';
import Education from '../section/education';
import Award from '../section/award';
import Social from '../section/social';
import Project from '../section/project';

const Home = () => {
  const { Header, Footer, Content } = Layout;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Layout>
        <Header
          style={{
            height: '100%',
            backgroundColor: '#FFF',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h2>Jay</h2>
          <p>Sophanith MEY</p>
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
                <h1>Educations</h1>
              </Divider>
              <Education />
              <Divider orientation="left" plain>
                <h1>Awards</h1>
              </Divider>
              <Award />
              <Divider orientation="left" plain>
                <h1>Projects</h1>
              </Divider>
              <Project />
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
    </>
  );
};

export default Home;
