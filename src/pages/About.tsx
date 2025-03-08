import Section from '../components/ui/Section';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 70 },
  ];

  const techStack = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'TypeScript',
    'AWS Services',
    'Docker',
    'Git',
    'REST APIs',
    'GraphQL',
    'Redux',
  ];

  return (
    <>
      <div className="flex justify-center items-center pb-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Background circle */}
            <div className="absolute inset-0 bg-primary rounded-full" />
            {/* Text */}
            <span className="relative z-10 text-6xl font-bold text-background font-sans tracking-wider">
              SM
            </span>
            {/* Border ring */}
            <div className="absolute inset-[-2px] border-2 border-primary/30 rounded-full" />
          </div>
        </motion.div>
      </div>

      <Section
        title="About Me"
        subtitle="Passionate developer with a focus on creating scalable web applications"
        noPadding
        className="pt-4"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Hi, I'm Sibashis
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a full-stack developer with {new Date().getFullYear() - 2020} years
                of experience in building web applications. I specialize in the MERN
                stack and have a strong foundation in cloud services, particularly AWS.
              </p>
              <p>
                My journey in web development started with a passion for creating
                user-friendly interfaces and has evolved into building complete,
                scalable solutions that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge through
                technical blog posts.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Tech Stack"
        subtitle="Technologies and tools I work with"
        className="bg-accent/20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <motion.div
              key={tech}
              className="bg-background p-4 rounded-lg text-center shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About; 