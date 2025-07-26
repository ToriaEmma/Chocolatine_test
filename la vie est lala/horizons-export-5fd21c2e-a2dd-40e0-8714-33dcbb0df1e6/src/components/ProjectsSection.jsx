
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const observerRef = useRef(null);
  const { toast } = useToast();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce 3D',
      category: 'Web Application',
      description: 'Plateforme e-commerce immersive avec visualisation 3D des produits',
      tech: ['React', 'Three.js', 'Node.js', 'MongoDB'],
      image: 'Plateforme e-commerce moderne avec interface 3D interactive et produits en réalité augmentée'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'Data Visualization',
      description: 'Tableau de bord interactif pour l\'analyse de données en temps réel',
      tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      image: 'Dashboard moderne avec graphiques interactifs et visualisations de données complexes'
    },
    {
      id: 3,
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'Application mobile innovante avec interface gestuelle avancée',
      tech: ['React Native', 'Figma', 'Framer Motion'],
      image: 'Interface mobile élégante avec design moderne et interactions gestuelles fluides'
    },
    {
      id: 4,
      title: 'AI Chatbot',
      category: 'Intelligence Artificielle',
      description: 'Assistant virtuel intelligent avec traitement du langage naturel',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
      image: 'Interface de chatbot IA avec bulles de conversation et design futuriste'
    },
    {
      id: 5,
      title: 'VR Experience',
      category: 'Réalité Virtuelle',
      description: 'Expérience immersive en réalité virtuelle pour la formation',
      tech: ['Unity', 'C#', 'Oculus SDK', 'Blender'],
      image: 'Environnement de réalité virtuelle immersif avec casque VR et interface 3D'
    },
    {
      id: 6,
      title: 'Blockchain DApp',
      category: 'Blockchain',
      description: 'Application décentralisée pour les contrats intelligents',
      tech: ['Solidity', 'Web3.js', 'Ethereum', 'IPFS'],
      image: 'Interface blockchain moderne avec visualisation de contrats intelligents et crypto-monnaies'
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setVisibleProjects(prev => new Set([...prev, projectId]));
          }
        });
      },
      { threshold: 0.3 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleProjectAction = (action, projectTitle) => {
    toast({
      title: "🚧 Fonctionnalité en développement",
      description: `L'action "${action}" pour "${projectTitle}" n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀`
    });
  };

  return (
    <section id="projects" className="section-snap min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 kinetic-text">Projets</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations les plus innovantes, 
            alliant créativité et expertise technique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              data-project-id={project.id}
              ref={(el) => {
                if (el && observerRef.current) {
                  observerRef.current.observe(el);
                }
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={visibleProjects.has(project.id) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flip-card lazy-load"
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front holographic-card p-6">
                  <div className="h-48 mb-4 rounded-lg overflow-hidden">
                    <img  
                      alt={`Aperçu du projet ${project.title}`}
                      className="w-full h-full object-cover"
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </div>
                  <div className="text-sm text-blue-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>

                {/* Back */}
                <div className="flip-card-back holographic-card p-6">
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4 mt-6">
                    <button
                      onClick={() => handleProjectAction('Voir le projet', project.title)}
                      className="p-2 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-colors"
                    >
                      <Eye size={20} />
                    </button>
                    <button
                      onClick={() => handleProjectAction('Voir le code', project.title)}
                      className="p-2 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-colors"
                    >
                      <Github size={20} />
                    </button>
                    <button
                      onClick={() => handleProjectAction('Lien externe', project.title)}
                      className="p-2 bg-pink-500/20 rounded-full hover:bg-pink-500/30 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
