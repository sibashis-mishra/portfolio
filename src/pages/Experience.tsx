import { motion } from 'framer-motion';
import Section from '../components/ui/Section';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Company A',
      role: 'Senior Full Stack Developer',
      period: 'Jan 2022 - Present',
      description: [
        'Led the development of a microservices-based e-commerce platform serving 100k+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      company: 'Tech Company B',
      role: 'Full Stack Developer',
      period: 'Mar 2020 - Dec 2021',
      description: [
        'Developed and maintained multiple React-based web applications',
        'Optimized database queries resulting in 40% faster load times',
        'Integrated third-party APIs and payment gateways',
      ],
    },
    {
      company: 'Tech Company C',
      role: 'Frontend Developer',
      period: 'Jun 2019 - Feb 2020',
      description: [
        'Built responsive user interfaces using React and TypeScript',
        'Implemented state management using Redux and Context API',
        'Collaborated with UX designers to improve user experience',
      ],
    },
  ];

  const skills = {
    'Frontend Development': [
      'React.js',
      'TypeScript',
      'Next.js',
      'Redux',
      'Tailwind CSS',
      'Material-UI',
    ],
    'Backend Development': [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'RESTful APIs',
      'GraphQL',
    ],
    'DevOps & Tools': [
      'AWS',
      'Docker',
      'Git',
      'CI/CD',
      'Jest',
      'Cypress',
    ],
  };

  return (
    <>
      <Section
        title="Professional Experience"
        subtitle="My journey in software development"
      >
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-border">
                <div className="absolute top-2 -left-1.5 h-3 w-3 rounded-full bg-primary" />
              </div>
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">{exp.period}</span>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <h4 className="text-lg text-primary">{exp.company}</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="Skills & Expertise"
        subtitle="Technologies and tools I specialize in"
        className="bg-accent/20"
      >
        <div className="grid md:grid-cols-3 gap-8">
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

export default Experience; 