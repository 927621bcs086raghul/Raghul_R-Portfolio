import { Button } from "antd";
import { Github, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeIn">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/c7321832-a93a-4548-ac83-38df8204a955.png" 
              alt="Raghul R - Profile Photo"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto',
                border: '4px solid hsl(var(--primary))',
                boxShadow: '0 10px 30px hsl(var(--primary) / 0.3)'
              }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            RAGHUL R
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slideUp">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <MapPin className="w-4 h-4" />
            <span>Nagapattinam, Tamil Nadu</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="large" 
              type="primary"
              className="accent-gradient hover:glow-primary transition-all duration-300 transform hover:scale-105"
              href="#contact"
            >
              Get In Touch
            </Button>
            <div className="flex gap-4">
              <Button 
                variant="outlined" 
                size="large" 
                className="border-border hover:border-primary hover:glow-secondary transition-all duration-300"
                href="https://github.com/927621bcs086raghul"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Github className="w-5 h-5" />}
              >
                GitHub
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                className="border-border hover:border-primary hover:glow-secondary transition-all duration-300"
                href="mailto:raghulajay814@gmail.com"
                icon={<Mail className="w-5 h-5" />}
              >
                Email
              </Button>
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.6s' }}>
            Computer Science Engineering student passionate about creating innovative web solutions 
            with modern technologies like React, JavaScript, and intuitive UI/UX design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;