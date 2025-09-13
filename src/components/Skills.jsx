import { Card, Tag, Row, Col, Typography } from "antd";
import { CodeOutlined, DatabaseOutlined, ToolOutlined, GlobalOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Skills = () => {
  const skillCategories = [
    {
      icon: CodeOutlined,
      title: "Languages",
      skills: ["Java", "JavaScript"],
      color: "#1890ff"
    },
    {
      icon: GlobalOutlined,
      title: "Frontend",
      skills: ["HTML", "CSS+ANTDESIGN", "ReactJS"],
      color: "#52c41a"
    },
    {
      icon: ToolOutlined,
      title: "Tools",
      skills: ["Git", "Visual Studio Code"],
      color: "#722ed1"
    },
    {
      icon: DatabaseOutlined,
      title: "Learning",
      skills: ["Node.js", "MongoDB", "TypeScript"],
      color: "#fa8c16"
    },
    {
      icon: GlobalOutlined,
      title: "React",
      skills: ["Redux Toolkit", "Thunk", "Saga"],
      color: "#47b9b9ff"
    }
  ];

  return (
    <section 
      id="skills" 
      style={{
        padding: '80px 24px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)'
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
            Technical Skills
          </Title>
          <Paragraph style={{ 
            fontSize: '1.25rem', 
            color: '#999999', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            A collection of technologies and tools I work with to bring ideas to life
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {skillCategories.map((category, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                bodyStyle={{ padding: '24px', textAlign: 'center' }}
                hoverable
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  let boxShadowColor;
                  if (category.color === '#1890ff') boxShadowColor = '24, 144, 255';
                  else if (category.color === '#52c41a') boxShadowColor = '82, 196, 26';
                  else if (category.color === '#722ed1') boxShadowColor = '114, 46, 209';
                  else if (category.color === '#47b9b9ff' || category.title === 'React') boxShadowColor = '71, 185, 185';
                  else boxShadowColor = '250, 140, 22';
                  e.currentTarget.style.boxShadow = `0 15px 35px rgba(${boxShadowColor}, 0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginBottom: '16px' 
                }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '50%',
                    background: `rgba(${category.color === '#1890ff' ? '24, 144, 255' : category.color === '#52c41a' ? '82, 196, 26' : category.color === '#722ed1' ? '114, 46, 209' : category.color === '#47b9b9ff' || category.title === 'React' ? '71, 185, 185' : '250, 140, 22'}, 0.1)`
                  }}>
                    <category.icon style={{ fontSize: '32px', color: category.color }} />
                  </div>
                </div>
                <Title level={4} style={{ color: '#ffffff', marginBottom: '16px' }}>
                  {category.title}
                </Title>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Tag 
                      key={skillIndex}
                      color="blue"
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'rgba(24, 144, 255, 0.1)',
                        color: '#ffffff',
                        textAlign: 'center',
                        fontSize: '14px'
                      }}
                    >
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <Card
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              maxWidth: '800px',
              margin: '0 auto'
            }}
            bodyStyle={{ padding: '32px' }}
          >
            <Title level={3} style={{ color: '#1890ff', marginBottom: '16px' }}>
              Always Learning
            </Title>
            <Paragraph style={{ 
              color: '#999999', 
              fontSize: '1.1rem', 
              lineHeight: '1.6',
              margin: 0
            }}>
              I'm constantly expanding my skillset and staying up-to-date with the latest technologies. 
              Currently exploring backend development, cloud platforms, and advanced React patterns 
              to become a well-rounded full-stack developer.
            </Paragraph>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;