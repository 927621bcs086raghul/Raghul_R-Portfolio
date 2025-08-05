import { Form, Input, Button, Card, Row, Col, Typography, Space } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, GithubOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    alert('Thank you for your message! I will get back to you soon.');
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: MailOutlined,
      title: "Email",
      value: "raghulajay814@gmail.com",
      link: "mailto:raghulajay814@gmail.com"
    },
    {
      icon: EnvironmentOutlined,
      title: "Location", 
      value: "Nagapattinam, Tamil Nadu",
      link: null
    },
    {
      icon: GithubOutlined,
      title: "GitHub",
      value: "927621bcs086raghul",
      link: "https://github.com/927621bcs086raghul"
    }
  ];

  return (
    <section 
      id="contact" 
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
            Get In Touch
          </Title>
          <Paragraph style={{ 
            fontSize: '1.25rem', 
            color: '#999999', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            I'm always interested in hearing about new opportunities and exciting projects. Let's connect!
          </Paragraph>
        </div>

        <Row gutter={[48, 32]} align="top">
          <Col xs={24} lg={8}>
            <div style={{ marginBottom: '32px' }}>
              <Title level={3} style={{ color: '#ffffff', marginBottom: '24px' }}>
                Contact Information
              </Title>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px'
                    }}
                    bodyStyle={{ padding: '20px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{
                        background: 'rgba(24, 144, 255, 0.1)',
                        borderRadius: '50%',
                        padding: '12px',
                        marginRight: '16px'
                      }}>
                        <info.icon style={{ fontSize: '20px', color: '#1890ff' }} />
                      </div>
                      <div>
                        <div style={{ color: '#ffffff', fontWeight: '500', marginBottom: '4px' }}>
                          {info.title}
                        </div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#1890ff', textDecoration: 'none' }}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div style={{ color: '#cccccc' }}>{info.value}</div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </Space>
            </div>
          </Col>

          <Col xs={24} lg={16}>
            <Card
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px'
              }}
              bodyStyle={{ padding: '32px' }}
            >
              <Title level={3} style={{ color: '#ffffff', marginBottom: '24px' }}>
                Send me a message
              </Title>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Row gutter={[16, 0]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label={<span style={{ color: '#cccccc' }}>Name</span>}
                      rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                      <Input 
                        placeholder="Your Name"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#ffffff'
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label={<span style={{ color: '#cccccc' }}>Email</span>}
                      rules={[
                        { required: true, message: 'Please enter your email!' },
                        { type: 'email', message: 'Please enter a valid email!' }
                      ]}
                    >
                      <Input 
                        placeholder="your.email@example.com"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#ffffff'
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="subject"
                  label={<span style={{ color: '#cccccc' }}>Subject</span>}
                  rules={[{ required: true, message: 'Please enter a subject!' }]}
                >
                  <Input 
                    placeholder="Project Collaboration"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff'
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={<span style={{ color: '#cccccc' }}>Message</span>}
                  rules={[{ required: true, message: 'Please enter your message!' }]}
                >
                  <TextArea 
                    rows={6}
                    placeholder="Tell me about your project or just say hello!"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff'
                    }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{
                      background: 'linear-gradient(45deg, #1890ff, #52c41a)',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(24, 144, 255, 0.4)',
                      width: '100%'
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;