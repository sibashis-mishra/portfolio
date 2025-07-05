import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech – Computer Science & Engineering',
      institution: 'Biju Patnaik University of Technology',
      location: 'Rourkela',
      year: '2023',
      description: 'Completed Bachelor of Technology in Computer Science & Engineering with focus on software development and system architecture.',
      icon: GraduationCap,
    },
    {
      degree: 'DBMS Course',
      institution: 'IIT Kharagpur',
      location: 'Kharagpur',
      year: '2023',
      description: 'Completed Database Management Systems course with 79% score, gaining expertise in database design and management.',
      certificate: 'https://drive.google.com/file/d/1YpD_qiVY_17RJZCcqsXKYiAt2Rjfpvnz',
      icon: Award,
    },
  ];

  // const certifications = [
  //   {
  //     name: 'AWS Cloud Practitioner',
  //     issuer: 'Amazon Web Services',
  //     year: '2024',
  //     description: 'Certified in AWS cloud fundamentals and best practices for cloud architecture.',
  //   },
  //   {
  //     name: 'MongoDB Database Administrator',
  //     issuer: 'MongoDB University',
  //     year: '2023',
  //     description: 'Certified in MongoDB database administration and optimization techniques.',
  //   },
  // ];

  return (
    <>
      <Section
        title="Education"
        subtitle="My academic background and continuous learning journey"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-16 pb-8 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-border">
                <div className="absolute top-2 -left-1.5 h-3 w-3 rounded-full bg-primary" />
              </div>
              <div className="absolute left-8 top-0 -translate-x-1/2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <edu.icon className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">{edu.year}</span>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <h4 className="text-lg text-primary">{edu.institution}</h4>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
                <p className="text-muted-foreground">{edu.description}</p>
                {edu.certificate && (
                  <a
                    href={edu.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    View Certificate <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* <Section
        title="Certifications"
        subtitle="Professional certifications and continuous learning"
        className="bg-accent/20"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg shadow-sm border"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <p className="text-primary">{cert.issuer}</p>
                </div>
                <span className="text-sm text-muted-foreground">{cert.year}</span>
              </div>
              <p className="text-muted-foreground">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </Section> */}

      <Section
        title="Skills & Technologies"
        subtitle="Technical skills acquired through education and experience"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center">Programming Languages</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center">Web Technologies</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {['HTML5', 'CSS3', 'React.js', 'Next.js', 'Node.js', 'Express.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center">Databases & Cloud</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {['MongoDB', 'PostgreSQL', 'AWS', 'GCP', 'Docker', 'Git'].map((db) => (
                <span
                  key={db}
                  className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm"
                >
                  {db}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Education; 