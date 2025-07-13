import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'client' | 'personal'>('client');

  const clientProjects = [
    {
      title: 'Patient Portal',
      description: 'Built a comprehensive patient portal where users can book appointments for clinicians, manage credit card billing, store insurance details, and upload important documents. Features secure payment processing and document management.',
      tags: ['React', 'Node.js', 'Stripe', 'S3', 'Advanced MD API', 'GoHighLevel API', 'AWS App Runner'],
      category: 'Healthcare',
      websiteLink: 'https://patients.hellolunajoy.com',
    },
    {
      title: 'Appointment & Billing Management Dashboard',
      description: 'Built a centralized dashboard for healthcare administrators to schedule appointments for patients and clinicians, process patient payments, and manage billing workflows efficiently.',
      tags: ['React', 'Node.js', 'Stripe', 'Advanced MD API', 'GoHighLevel API', 'Google Login', 'AWS App Runner'],
      category: 'Healthcare',
      websiteLink: 'https://lunaverse.hellolunajoy.com',
    },
    {
      title: 'Patient Health Questionnaire Application',
      description: 'Rebuilt a digital platform for patients to complete various mental health questionnaires. Features customizable forms, progress tracking, and secure data collection for healthcare providers.',
      tags: ['React', 'Node.js', 'Jotform', 'AWS Elastic Service'],
      category: 'Healthcare',
      websiteLink: 'https://partner.hellolunajoy.com',
    },
    {
      title: 'Internal Team Portal',
      description: 'Contributed to the development of a comprehensive internal portal displaying providers, patients, bookings, and all operational data. Features role-based access control, real-time analytics, and comprehensive reporting.',
      tags: ['React', 'Node.js', 'Role Management', 'Google Login', 'AWS Elastic Service'],
      category: 'Healthcare',
      websiteLink: 'https://portal.hellolunajoy.com',
    },
    {
      title: 'Cloud Infrastructure Optimization',
      description: 'AWS-based cloud infrastructure optimization achieving 90% cost reduction with automated CI/CD pipelines. Implements auto-scaling, load balancing, and monitoring solutions.',
      tags: ['AWS', 'CI/CD', 'Docker', 'Git', 'AWS App Runner', 'AWS Elastic Service', 'EC2', 'VPC', 'S3', 'RDS', 'CloudFront', 'Route 53'],
      category: 'Infrastructure',
    },
    {
      title: 'Code Assessment Portal',
      description: 'Built a full-stack assessment platform developed from scratch using MERN stack, Judge0, improving coding evaluation processes. Features include real-time code execution, automated testing, and detailed analytics.',
      tags: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js', 'Judge0'],
      category: 'Full-Stack',
      websiteLink: 'https://code.truliacare.com',
    },
    {
      title: 'Leave Management Portal',
      description: 'Contributed to the development of a comprehensive leave management system where employees can apply for leaves and managers can approve them. Features include public holiday calendar, leave tracking, leave balance visibility, colleague leave status, and Google Calendar integration.',
      tags: ['React', 'Node.js', 'Google Calendar API', 'Google Login'],
      category: 'HR Management',
      websiteLink: 'https://portal.kratinmobile.com',
    },
  ];

  const personalProjects = [
    {
      title: 'AI Chat Pro',
      description: 'A modern AI chat application with ChatGPT-like interface, user authentication, and multiple AI models. Features real-time streaming responses, persistent chat history, and cost tracking with request limits.',
      tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
      category: 'Full-Stack',
      githubLink: 'https://github.com/sibashis-mishra/ai-chat-pro/',
      websiteLink: 'https://ai-chat-pro-six.vercel.app/',
    },
    {
      title: 'Inventory & Project Management System',
      description: 'A comprehensive management system for DRDO, enhancing organizational efficiency with MERN stack implementation. Includes real-time tracking, reporting, and resource optimization.',
      tags: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
      category: 'Management',
      githubLink: 'https://github.com/sibashis-mishra/Inventory_Management_System',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and contact form integration.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      githubLink: 'https://github.com/sibashis-mishra/portfolio',
      websiteLink: 'https://portfolio-gamma-silk-52.vercel.app/',
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


    </>
  );
};

export default Projects; 