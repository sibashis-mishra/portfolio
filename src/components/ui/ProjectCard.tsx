import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: string;
  type: 'client' | 'personal';
}

const ProjectCard = ({
  title,
  description,
  tags,
  category,
  type,
}: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground">{category}</span>
        </div>
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