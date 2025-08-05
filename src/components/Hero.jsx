import { Button, Space, Typography } from "antd";
import { GithubOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";
import raghulImg from '../Assets/raghul.jpg'; 
const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
            <section id="home" className="hero-section">
                {/* Background decorative elements */}
            <div className="hero-blur-circle top-right"></div>
            <div className="hero-blur-circle bottom-left"></div>

            <div className="hero-container">
              <div style={{ marginBottom: '32px' }}>
                <img
                  src={raghulImg}
                  alt="Raghul R - Profile Photo"
                  className="hero-avatar"
                />
              </div>

              <Title level={1} className="hero-title">
                RAGHUL R
              </Title>

              <Paragraph className="hero-subtitle">
                React Developer & UI/UX Enthusiast
              </Paragraph>

              <div className="hero-location">
                <EnvironmentOutlined />
                <span>Nagapattinam, Tamil Nadu</span>
              </div>

              <Space wrap size="large" style={{ marginBottom: '32px' }}>
                <Button
                  type="primary"
                  size="large"
                  className="hero-button-primary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>

                <Button
                  type="primary"
                  size="large"
                  className="hero-button-primary"
                  href="/resume.pdf"
                  download="Raghul_R_Resume.pdf"
                >
                  Get Resume
                </Button>

                <Button
                  size="large"
                  icon={<GithubOutlined />}
                  href="https://github.com/927621bcs086raghul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>

                <Button
                  size="large"
                  icon={<MailOutlined />}
                  href="mailto:raghulajay814@gmail.com"
                >
                  Email
                </Button>
              </Space>

              <Paragraph className="hero-paragraph">
                Computer Science Engineering student passionate about creating innovative web solutions
                with modern technologies like React, JavaScript, and intuitive UI/UX design.
              </Paragraph>
            </div>
          </section>

  );
};

export default Hero;