import { motion } from 'framer-motion';
import Section from '../components/ui/Section';

const Experience = () => {
  const experiences = [
    {
      company: 'Truliacare India',
      role: 'Technologist',
      period: '04/2024 - Present',
      location: 'Nagpur, Maharashtra',
      description: [
        'Lead development projects utilizing MERN stack, Next.js, PostgreSQL, and AWS, ensuring scalability and optimal performance',
        'Optimize cloud infrastructure, enhancing application performance and reducing costs',
        'Handle CI/CD deployments using Git and AWS App Runner, automating build and release pipelines for seamless and scalable application delivery',
        'Mentor junior developers, fostering technical innovation and knowledge sharing',
        'Cultivate and manage client relationships, delivering solutions aligned with business goals',
      ],
    },
    {
      company: 'Truliacare India',
      role: 'Associate Technologist',
      period: '01/2023 – 03/2024',
      location: 'Nagpur, Maharashtra',
      description: [
        'Engineered a robust Appointment Booking Application using Next.js, enhancing scheduling efficiency',
        'Designed and implemented a comprehensive Patient Management Dashboard with MERN stack, streamlining patient data management',
        'Deployed and optimized applications on AWS, achieving a 90% cost reduction',
        'Engaged directly with clients to ensure solutions met their business needs and exceeded expectations',
      ],
    },
    {
      company: 'Truliacare India',
      role: 'Intern Technologist',
      period: '07/2022 - 01/2023',
      location: 'Nagpur, Maharashtra',
      description: [
        'Developed a Code Assessment Portal from scratch using the MERN stack, improving assessment processes',
        'Collaborated with the team to build and deploy key projects, contributing to overall project success',
      ],
    },
    {
      company: 'PXE, DRDO',
      role: 'Intern',
      period: '06/2022 - 07/2022',
      location: 'Balasore, Odisha',
      description: [
        'Directed research and data compilation, leading the team to complete critical projects',
        'Created an Inventory & Project Management System using MERN stack, enhancing organizational efficiency',
      ],
    },
  ];

  return (
    <Section
      title="Professional Experience"
      subtitle="My journey in software development"
    >
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
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
              <p className="text-sm text-muted-foreground">{exp.location}</p>
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
  );
};

export default Experience; 