import { Card, Button, Tag, Row, Col, Typography } from "antd";
import { GithubOutlined, LinkOutlined, CodeOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Projects = () => {
  const projects = [
    {
      title: "Smart Parking Slot Booking System",
      description: "A comprehensive parking management solution built with ReactJS featuring real-time slot availability, booking system, and admin dashboard for monitoring and management.",
      technologies: ["ReactJS", "CSS", "JavaScript"],
      github: "https://github.com/927621bcs086raghul",
      demo: "#"
    },
    {
      title: "Subject Allocation System", 
      description: "A streamlined web application designed to simplify the process of allocating subjects to staff and classes, reducing manual effort in college administrative workflows.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/927621bcs086raghul",
      demo: "#"
    },
    {
      title: "NetReflect",
      description: "A Netflix-inspired streaming platform interface built using React, Vite.js, and Ant Design, featuring responsive layouts, styled UI components, and intuitive navigation for browsing shows and movies.",
      technologies: ["React", "Vite.js", "Ant Design", "JavaScript", "CSS"],
      github: "https://github.com/927621bcs086raghul/netreflect",
      demo: "https://netreflect-raghulajay814-5015s-projects.vercel.app/"
    }
  ];

  return (
    <section 
      id="projects" 
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
            Featured Projects
          </Title>
          <Paragraph style={{ 
            fontSize: '1.25rem', 
            color: '#999999', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            Showcase of my development journey, highlighting practical solutions and technical skills
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {projects.map((project, index) => (
            <Col xs={24} lg={12} key={index}>
              <Card
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  height: '100%'
                }}
                bodyStyle={{ padding: '32px' }}
                hoverable
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <CodeOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
                  <Title level={4} style={{ color: '#ffffff', margin: 0 }}>
                    {project.title}
                  </Title>
                </div>
                
                <Paragraph style={{ 
                  color: '#cccccc', 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  {project.description}
                </Paragraph>
                
                <div style={{ marginBottom: '24px' }}>
                  {project.technologies.map((tech, techIndex) => (
                    <Tag 
                      key={techIndex}
                      color="blue"
                      style={{ margin: '4px' }}
                    >
                      {tech}
                    </Tag>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Button
                    type="primary"
                    icon={<GithubOutlined />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </Button>
                  <Button
                    icon={<LinkOutlined />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;
