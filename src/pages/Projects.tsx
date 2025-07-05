import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'client' | 'personal'>('client');

  const clientProjects = [
    {
      title: 'Appointment Booking Application',
      description: 'A robust appointment scheduling system built with Next.js, enhancing scheduling efficiency for healthcare providers. Features include real-time availability, automated reminders, and integration with healthcare APIs.',
      image: 'https://placehold.co/600x400',
      tags: ['Next.js', 'React', 'TypeScript', 'Healthcare'],
      category: 'Healthcare',
      type: 'client' as const,
      client: 'Healthcare Provider',
    },
    {
      title: 'Patient Management Dashboard',
      description: 'A comprehensive patient data management system using MERN stack, streamlining patient information and care coordination. Includes HIPAA-compliant data handling and advanced reporting features.',
      image: 'https://placehold.co/600x400',
      tags: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
      category: 'Healthcare',
      type: 'client' as const,
      client: 'Medical Practice',
    },
    {
      title: 'Healthcare API Integration',
      description: 'Integration of Advanced MD API and GoHighLevel API with HIPAA compliance for secure healthcare data management. Implements secure authentication and data encryption.',
      image: 'https://placehold.co/600x400',
      tags: ['API Integration', 'HIPAA Compliance', 'Advanced MD API', 'GoHighLevel API'],
      category: 'Healthcare',
      type: 'client' as const,
      client: 'Healthcare Technology Company',
    },
    {
      title: 'Cloud Infrastructure Optimization',
      description: 'AWS-based cloud infrastructure optimization achieving 90% cost reduction with automated CI/CD pipelines. Implements auto-scaling, load balancing, and monitoring solutions.',
      image: 'https://placehold.co/600x400',
      tags: ['AWS', 'CI/CD', 'Docker', 'Git', 'AWS App Runner'],
      category: 'Infrastructure',
      type: 'client' as const,
      client: 'Healthcare Startup',
    },
  ];

  const personalProjects = [
    {
      title: 'Code Assessment Portal',
      description: 'A full-stack assessment platform developed from scratch using MERN stack, improving coding evaluation processes. Features include real-time code execution, automated testing, and detailed analytics.',
      image: 'https://placehold.co/600x400',
      tags: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
      category: 'Full-Stack',
      type: 'personal' as const,
      liveUrl: 'https://code-assessment-demo.vercel.app',
      githubUrl: 'https://github.com/sibashis-mishra/code-assessment',
    },
    {
      title: 'Inventory & Project Management System',
      description: 'A comprehensive management system for DRDO, enhancing organizational efficiency with MERN stack implementation. Includes real-time tracking, reporting, and resource optimization.',
      image: 'https://placehold.co/600x400',
      tags: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
      category: 'Management',
      type: 'personal' as const,
      liveUrl: 'https://inventory-system-demo.vercel.app',
      githubUrl: 'https://github.com/sibashis-mishra/inventory-system',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and contact form integration.',
      image: 'https://placehold.co/600x400',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      type: 'personal' as const,
      liveUrl: 'https://sibashis-portfolio.vercel.app',
      githubUrl: 'https://github.com/sibashis-mishra/portfolio',
    },
  ];

  const currentProjects = activeTab === 'client' ? clientProjects : personalProjects;

  return (
    <>
      <Section
        title="My Projects"
        subtitle="A collection of my work showcasing both client solutions and personal innovations"
      >
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('client')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'client'
                ? 'bg-primary text-primary-foreground'
                : 'bg-accent text-accent-foreground hover:bg-accent/80'
            }`}
          >
            Client Projects
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'personal'
                ? 'bg-primary text-primary-foreground'
                : 'bg-accent text-accent-foreground hover:bg-accent/80'
            }`}
          >
            Personal Projects
          </button>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {currentProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {activeTab === 'client' && (
        <Section
          title="Client Work Approach"
          subtitle="Professional solutions with confidentiality and security"
          className="bg-accent/20"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-muted-foreground">
              My client projects focus on delivering secure, scalable solutions while maintaining 
              strict confidentiality. Each project is tailored to meet specific business requirements 
              and industry standards, particularly in healthcare where HIPAA compliance is crucial.
            </p>
            <p className="text-muted-foreground">
              For detailed case studies and technical specifications, please contact me directly.
            </p>
          </div>
        </Section>
      )}

      {activeTab === 'personal' && (
        <Section
          title="Personal Innovation"
          subtitle="Open-source projects and creative solutions"
          className="bg-accent/20"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-muted-foreground">
              My personal projects showcase my passion for innovation and continuous learning. 
              These projects are open-source and available for collaboration, demonstrating 
              my technical skills and problem-solving approach.
            </p>
            <p className="text-muted-foreground">
              Feel free to explore the live demos and contribute to the repositories!
            </p>
          </div>
        </Section>
      )}
    </>
  );
};

export default Projects; 