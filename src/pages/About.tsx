import Section from '../components/ui/Section';
import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    'Frontend Development': [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Bootstrap',
      'HTML/CSS',
    ],
    'Backend Development': [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'RESTful APIs',
      'GraphQL',
      'MERN Stack',
    ],
    'Cloud & DevOps': [
      'AWS Services',
      'GCP',
      'Docker',
      'Git',
      'CI/CD',
      'AWS App Runner',
    ],
    'Healthcare & APIs': [
      'HIPAA Compliance',
      'Advanced MD API',
      'GoHighLevel API',
      'Stripe',
      'Advance Pay',
    ],
  };

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
        subtitle="Innovative Full-Stack MERN Developer and AWS Cloud Architect"
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
                I'm an innovative Full-Stack MERN Developer and AWS Cloud Architect with 3 years of expertise 
                in MERN stack and cloud solutions. I specialize in crafting scalable web applications, 
                developing user-centric interfaces, and integrating complex APIs.
              </p>
              <p>
                With a proven track record of executing 15+ successful projects in the healthcare sector, 
                I've delivered high-performance, secure deployments with 100% client satisfaction. 
                My proficiency in both front-end and back-end development, coupled with strong 
                problem-solving skills, positions me as a key asset for any development team.
              </p>
              <p>
                When I'm not coding, you can find me exploring new cloud technologies, 
                contributing to open-source projects, or mentoring junior developers to foster 
                technical innovation and knowledge sharing.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20"
              >
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Healthcare Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20"
              >
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {(() => {
                    const startDate = new Date('2022-07-01');
                    const currentDate = new Date();
                    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
                    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
                    const totalMonths = yearsDiff * 12 + monthsDiff;
                    const years = Math.floor(totalMonths / 12);
                    const months = totalMonths % 12;
                    return months > 0 ? `${years}.${months}` : years;
                  })()}
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20"
              >
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-center">Key Achievements</h4>
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-background rounded-lg border"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">HIPAA Compliant Healthcare Solutions</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-background rounded-lg border"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">AWS Cloud Infrastructure Optimization</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-background rounded-lg border"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">MERN Stack Full-Stack Development</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Skills & Expertise"
        subtitle="Technologies and tools I specialize in"
        className="bg-accent/20"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-center mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-background border text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About; 