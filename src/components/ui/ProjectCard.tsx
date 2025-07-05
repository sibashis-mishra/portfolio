import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, EyeIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  type: 'client' | 'personal';
  client?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  category,
  type,
  client,
}: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {type === 'personal' && liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors"
              aria-label="View live site"
            >
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          )}
          {type === 'personal' && githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors"
              aria-label="View source code"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {type === 'client' && (
            <div className="bg-primary text-primary-foreground p-2 rounded-full">
              <EyeIcon className="w-5 h-5" />
            </div>
          )}
        </div>
        {type === 'client' && (
          <div className="absolute top-2 right-2">
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Client Project
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground">{category}</span>
        </div>
        {client && (
          <p className="text-sm text-primary mb-2">Client: {client}</p>
        )}
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 