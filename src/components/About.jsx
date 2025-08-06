import { Card, Tag, Row, Col, Typography } from "antd";
import { UserOutlined, BookOutlined, HeartOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <section 
      id="about" 
      style={{
        padding: '80px 24px',
        background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Title 
            level={2} 
            style={{ 
              fontSize: '3rem',
              background: 'linear-gradient(45deg, #ffffff, #1890ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px'
            }}
          >
            About Me
          </Title>
          <Paragraph style={{ 
            fontSize: '1.25rem', 
            color: '#999999', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            Get to know more about my journey, passion, and aspirations
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={12}>
            <Card
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                height: '100%'
              }}
              bodyStyle={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <UserOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
                <Title level={3} style={{ color: '#ffffff', margin: 0 }}>
                  Who I Am
                </Title>
              </div>
              <Paragraph style={{ 
                color: '#cccccc', 
                fontSize: '1.1rem', 
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
                I'm a Computer Science Engineering student with a deep passion for web development 
                and creating user-friendly digital experiences. My journey in technology started 
                with curiosity and has evolved into a dedicated pursuit of excellence.
              </Paragraph>
              <Paragraph style={{ 
                color: '#cccccc', 
                fontSize: '1.1rem', 
                lineHeight: '1.7'
              }}>
                I believe in writing clean, efficient code and designing interfaces that not only 
                look great but also provide exceptional user experiences.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card
                  style={{
                    background: 'linear-gradient(135deg, rgba(24, 144, 255, 0.1) 0%, rgba(24, 144, 255, 0.05) 100%)',
                    border: '1px solid rgba(24, 144, 255, 0.2)',
                    borderRadius: '12px'
                  }}
                  bodyStyle={{ padding: '24px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <BookOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '8px' }} />
                    <Title level={4} style={{ color: '#ffffff', margin: 0 }}>
                      Education
                    </Title>
                  </div>
                  <Paragraph style={{ color: '#cccccc', margin: 0 }}>
                    Computer Science Engineering<br />
                    Successfully completed my degree with a specialization in Software Development.
                    </Paragraph>
                </Card>
              </Col>

              <Col span={24}>
                <Card
                  style={{
                    background: 'linear-gradient(135deg, rgba(82, 196, 26, 0.1) 0%, rgba(82, 196, 26, 0.05) 100%)',
                    border: '1px solid rgba(82, 196, 26, 0.2)',
                    borderRadius: '12px'
                  }}
                  bodyStyle={{ padding: '24px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <HeartOutlined style={{ fontSize: '20px', color: '#52c41a', marginRight: '8px' }} />
                    <Title level={4} style={{ color: '#ffffff', margin: 0 }}>
                      Passion
                    </Title>
                  </div>
                  <Paragraph style={{ color: '#cccccc', margin: 0 }}>
                    Creating innovative web solutions that solve real-world problems 
                    and enhance user experiences through thoughtful design and robust code.
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <Card
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px'
            }}
            bodyStyle={{ padding: '32px' }}
          >
            <Title level={3} style={{ color: '#1890ff', marginBottom: '16px' }}>
              My Mission
            </Title>
            <Paragraph style={{ 
              color: '#cccccc', 
              fontSize: '1.2rem', 
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              To bridge the gap between complex technology and user-friendly experiences. 
              I strive to create web applications that are not only functional and efficient 
              but also intuitive and accessible to everyone.
            </Paragraph>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;