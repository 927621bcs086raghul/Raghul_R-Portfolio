import { Layout, Typography, Space, Divider } from "antd";
import { GithubOutlined, MailOutlined, HeartOutlined } from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter 
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '48px 24px 24px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ 
            fontWeight: 'bold', 
            fontSize: '24px',
            background: 'linear-gradient(45deg, #1890ff, #52c41a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            RAGHUL.R
          </div>
          <Text style={{ color: '#999999', fontSize: '16px' }}>
            React Developer & UI/UX Enthusiast
          </Text>
        </div>

        <Space size="large" style={{ marginBottom: '32px' }}>
          <Link
            href="https://github.com/927621bcs086raghul"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#cccccc' }}
          >
            <GithubOutlined style={{ fontSize: '24px' }} />
          </Link>
          <Link
            href="mailto:raghulajay814@gmail.com"
            style={{ color: '#cccccc' }}
          >
            <MailOutlined style={{ fontSize: '24px' }} />
          </Link>
        </Space>

        <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '32px 0' }} />

        <Text style={{ color: '#666666' }}>
          © {currentYear} Raghul R. All rights reserved.
        </Text>
        
        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <Text style={{ color: '#666666' }}>Made with</Text>
          <HeartOutlined style={{ color: '#ff4d4f', fontSize: '16px' }} />
          <Text style={{ color: '#666666' }}>using React & Ant Design</Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;