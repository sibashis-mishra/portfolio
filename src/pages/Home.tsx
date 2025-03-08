import { motion } from 'framer-motion';
import { GithubIcon, ArrowRightIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text"
          >
            MERN Stack & AWS Developer
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Building scalable web applications with modern technologies.
            Passionate about creating seamless user experiences and robust backend systems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/sibashis-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sibashis-mishra-087088221/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:sibashis.mishra0001@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 