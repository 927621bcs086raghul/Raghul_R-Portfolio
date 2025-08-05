import { Card, Tag } from "antd";
import { Code2, Database, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Java", "JavaScript"],
      color: "text-blue-400"
    },
    {
      icon: Globe,
      title: "Frontend",
      skills: ["HTML", "CSS", "ReactJS"],
      color: "text-green-400"
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "Visual Studio Code"],
      color: "text-purple-400"
    },
    {
      icon: Database,
      title: "Learning",
      skills: ["Node.js", "MongoDB", "TypeScript"],
      color: "text-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border hover:border-primary transition-all duration-300 hover:glow-secondary transform hover:scale-105"
              style={{ padding: '24px', textAlign: 'center' }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Tag 
                    key={skillIndex} 
                    color="blue"
                    className="block w-full mb-2 p-2 text-center bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card 
            className="card-gradient border-border max-w-3xl mx-auto"
            style={{ padding: '32px' }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">Always Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm constantly expanding my skillset and staying up-to-date with the latest technologies. 
              Currently exploring backend development, cloud platforms, and advanced React patterns 
              to become a well-rounded full-stack developer.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;