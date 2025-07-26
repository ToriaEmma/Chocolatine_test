
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AboutSection = () => {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [stats, setStats] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    awards: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    // Animate counters
    const targetStats = { experience: 5, projects: 50, clients: 25, awards: 8 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        experience: Math.floor(targetStats.experience * progress),
        projects: Math.floor(targetStats.projects * progress),
        clients: Math.floor(targetStats.clients * progress),
        awards: Math.floor(targetStats.awards * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setStats(targetStats);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const timelineEvents = [
    {
      year: '2024',
      title: 'Lead Developer',
      company: 'TechCorp',
      description: 'Direction d\'équipe et architecture de solutions innovantes'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      description: 'Développement d\'applications web modernes et scalables'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'DigitalAgency',
      description: 'Création d\'interfaces utilisateur immersives'
    },
    {
      year: '2019',
      title: 'Diplôme Master',
      company: 'École d\'Ingénieur',
      description: 'Spécialisation en développement logiciel'
    }
  ];

  const handleTimelineClick = () => {
    setIsTimelineOpen(true);
  };

  const handleDownloadCV = () => {
    toast({
      title: "🚧 Fonctionnalité en développement",
      description: "Le téléchargement du CV n'est pas encore implémenté—mais ne vous inquiétez pas ! Vous pouvez le demander dans votre prochaine requête ! 🚀"
    });
  };

  return (
    <section id="about" className="section-snap min-h-screen flex items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 kinetic-text" style={{color:'#111'}}>À propos de moi</h2>
          <p className="text-xl" style={{color:'#111', maxWidth:'48rem', margin:'0 auto'}}>
            Je suis Emmanuela TODEDJI, jeune designer de marque autodidacte, passionnée par la direction artistique et le design numérique. Forte de 2 ans d'expérience et d'une formation à EPITECH Bénin, j'allie compétences techniques et créativité pour concevoir des solutions visuelles modernes et inclusives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar + Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full blur-xl opacity-90 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-indigo-600 via-pink-500 to-purple-600 animate-pulse"></div>
              <img
                alt="Portrait Emmanuela Todedji"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-black relative z-10"
                src="/assets/avatar.jpeg"
                style={{boxShadow:'0 8px 32px 0 rgba(30,30,30,0.25)', borderColor:'#111'}}
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              <span className="px-4 py-1 rounded-full" style={{background:'#a5b4fc', color:'#111', fontWeight:'bold', fontSize:'1rem', border:'2px solid #6366f1'}}>Créativité</span>
              <span className="px-4 py-1 rounded-full" style={{background:'#f9a8d4', color:'#111', fontWeight:'bold', fontSize:'1rem', border:'2px solid #ec4899'}}>Bienveillance</span>
              <span className="px-4 py-1 rounded-full" style={{background:'#c4b5fd', color:'#111', fontWeight:'bold', fontSize:'1rem', border:'2px solid #8b5cf6'}}>Autonomie</span>
              <span className="px-4 py-1 rounded-full" style={{background:'#7dd3fc', color:'#111', fontWeight:'bold', fontSize:'1rem', border:'2px solid #0ea5e9'}}>Esprit d'équipe</span>
              <span className="px-4 py-1 rounded-full" style={{background:'#bbf7d0', color:'#111', fontWeight:'bold', fontSize:'1rem', border:'2px solid #22c55e'}}>Gestion du stress</span>
            </div>
          </motion.div>

          {/* Stats, Timeline, Passions */}
          <div className="space-y-8">
            {/* Stats avec icônes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white p-6 text-center hover:scale-105 transition-transform duration-300 shadow-2xl rounded-2xl border-2 border-indigo-600">
                <div className="flex flex-col items-center">
                  <Award className="text-indigo-600 mb-1" size={32} />
                  <div className="text-3xl font-extrabold text-indigo-800 mb-1">{stats.experience}+</div>
                  <div className="text-black font-semibold">Années d'expérience</div>
                </div>
              </div>
              <div className="bg-white p-6 text-center hover:scale-105 transition-transform duration-300 shadow-2xl rounded-2xl border-2 border-purple-600">
                <div className="flex flex-col items-center">
                  <Users className="text-purple-600 mb-1" size={32} />
                  <div className="text-3xl font-extrabold text-purple-800 mb-1">{stats.projects}+</div>
                  <div className="text-black font-semibold">Projets réalisés</div>
                </div>
              </div>
              <div className="bg-white p-6 text-center hover:scale-105 transition-transform duration-300 shadow-2xl rounded-2xl border-2 border-pink-600">
                <div className="flex flex-col items-center">
                  <MapPin className="text-pink-600 mb-1" size={32} />
                  <div className="text-3xl font-extrabold text-pink-800 mb-1">{stats.clients}+</div>
                  <div className="text-black font-semibold">Clients satisfaits</div>
                </div>
              </div>
              <div className="bg-white p-6 text-center hover:scale-105 transition-transform duration-300 shadow-2xl rounded-2xl border-2 border-green-600">
                <div className="flex flex-col items-center">
                  <Award className="text-green-600 mb-1" size={32} />
                  <div className="text-3xl font-extrabold text-green-800 mb-1">{stats.awards}+</div>
                  <div className="text-black font-semibold">Récompenses</div>
                </div>
              </div>
            </motion.div>

            {/* Passions/valeurs sous forme de cartes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-2xl p-4 flex flex-col items-center hover:shadow-2xl transition border-2 border-indigo-600">
                <span className="text-indigo-600 text-2xl mb-2"><i className="fas fa-laptop-code"></i></span>
                <span className="font-bold text-black">Développement web</span>
                <span className="text-gray-800 text-sm mt-1 text-center">UX/UI design, interfaces intuitives et inclusives</span>
              </div>
              <div className="bg-white rounded-xl shadow-2xl p-4 flex flex-col items-center hover:shadow-2xl transition border-2 border-pink-600">
                <span className="text-pink-600 text-2xl mb-2"><i className="fas fa-gamepad"></i></span>
                <span className="font-bold text-black">Jeux vidéo</span>
                <span className="text-gray-800 text-sm mt-1 text-center">RPG, aventure, mécaniques innovantes</span>
              </div>
              <div className="bg-white rounded-xl shadow-2xl p-4 flex flex-col items-center hover:shadow-2xl transition border-2 border-purple-600">
                <span className="text-purple-600 text-2xl mb-2"><i className="fas fa-paint-brush"></i></span>
                <span className="font-bold text-black">Créativité</span>
                <span className="text-gray-800 text-sm mt-1 text-center">Graphisme, dessin, bricolage, tricotage</span>
              </div>
              <div className="bg-white rounded-xl shadow-2xl p-4 flex flex-col items-center hover:shadow-2xl transition border-2 border-green-600">
                <span className="text-green-600 text-2xl mb-2"><i className="fas fa-heart"></i></span>
                <span className="font-bold text-black">Valeurs</span>
                <span className="text-gray-800 text-sm mt-1 text-center">Inclusion, partage, empowerment par la tech</span>
              </div>
            </div>

            {/* Timeline Button */}
            <motion.button
              onClick={handleTimelineClick}
              className="w-full glass-morphism p-6 text-left hover:scale-105 transition-all duration-300 rounded-2xl mt-4 bg-white shadow-2xl border-2 border-indigo-600 text-black font-bold"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mon Parcours</h3>
                  <p className="text-black">Découvrez mon évolution professionnelle</p>
                </div>
                <Calendar className="text-indigo-600" size={32} />
              </div>
            </motion.button>

            {/* CV Download */}
            <motion.button
              onClick={handleDownloadCV}
              className="cv-download-btn w-full text-center bg-gradient-to-r from-indigo-700 to-pink-700 text-white font-bold py-3 rounded-full shadow-2xl hover:scale-105 transition mt-2 border-2 border-indigo-900"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="relative z-10">Télécharger mon CV</span>
            </motion.button>
          </div>
        </div>

        {/* Timeline Modal */}
        <AnimatePresence>
          {isTimelineOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsTimelineOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-morphism p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl bg-white/95 shadow-2xl border-2 border-indigo-600"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-3xl font-bold mb-8 text-center kinetic-text" style={{color:'#111'}}>Mon Parcours</h3>
                <div className="space-y-6">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-white border-2 border-indigo-100 shadow"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {event.year}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-black">{event.title}</h4>
                        <p className="text-blue-700 mb-2">{event.company}</p>
                        <p className="text-gray-900">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;
