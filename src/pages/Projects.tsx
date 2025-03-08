import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management and secure payment processing.',
      image: 'https://placehold.co/600x400',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full-Stack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sibashis-mishra/project-name',
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates and team collaboration features.',
      image: 'https://placehold.co/600x400',
      tags: ['React', 'TypeScript', 'Redux', 'Firebase'],
      category: 'Frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sibashis-mishra/project-name',
    },
    {
      title: 'API Gateway Service',
      description: 'A scalable API gateway service with rate limiting, caching, and authentication.',
      image: 'https://placehold.co/600x400',
      tags: ['Node.js', 'Express', 'Redis', 'JWT'],
      category: 'Backend',
      githubUrl: 'https://github.com/sibashis-mishra/project-name',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management dashboard with analytics and scheduling.',
      image: 'https://placehold.co/600x400',
      tags: ['React', 'GraphQL', 'Chart.js', 'Material-UI'],
      category: 'Frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sibashis-mishra/project-name',
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with private messaging and group chat functionality.',
      image: 'https://placehold.co/600x400',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'Full-Stack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sibashis-mishra/project-name',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <Section
      title="My Projects"
      subtitle="A collection of my recent work and personal projects"
    >
      <div className="flex justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-accent text-accent-foreground hover:bg-accent/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Projects; 