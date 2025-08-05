import { useState, useEffect } from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "skills", label: "Skills" },
    { key: "projects", label: "Projects" },
    { key: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.key);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (key) => {
    setIsOpen(false);
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
  <div className="navbar-inner">
    <div className="navbar-brand">RAGHUL.R</div>

    {/* Desktop Navigation */}
    <div className="desktop-nav">
      <Menu
        mode="horizontal"
        selectedKeys={[activeSection]}
        style={{ backgroundColor: 'transparent', borderBottom: 'none', display: 'flex', gap: '24px' }}
        items={navItems.map(item => ({
          ...item,
          onClick: () => handleNavClick(item.key),
          style: { color: activeSection === item.key ? '#1890ff' : '#ffffff' }
        }))}
      />
    </div>

    {/* Mobile Menu Button */}
    <Button
      type="text"
      className="mobile-menu-btn"
      onClick={() => setIsOpen(!isOpen)}
      icon={<MenuOutlined style={{ color: '#ffffff' }} />}
    />
  </div>

  {/* Mobile Navigation Drawer */}
  <Drawer
    title="Navigation"
    placement="right"
    onClose={() => setIsOpen(false)}
    open={isOpen}
  >
    <Menu
      mode="vertical"
      selectedKeys={[activeSection]}
      style={{ backgroundColor: 'transparent', border: 'none' }}
      items={navItems.map(item => ({
        ...item,
        onClick: () => handleNavClick(item.key)
      }))}
    />
  </Drawer>
</nav>

  );
};

export default Navigation;