
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const [animateArcs, setAnimateArcs] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'React', level: 95, color: '#61DAFB', angle: 0 },
    { name: 'JavaScript', level: 90, color: '#F7DF1E', angle: 45 },
    { name: 'TypeScript', level: 85, color: '#3178C6', angle: 90 },
    { name: 'Node.js', level: 88, color: '#339933', angle: 135 },
    { name: 'Python', level: 82, color: '#3776AB', angle: 180 },
    { name: 'Three.js', level: 78, color: '#000000', angle: 225 },
    { name: 'Vue.js', level: 80, color: '#4FC08D', angle: 270 },
    { name: 'Docker', level: 75, color: '#2496ED', angle: 315 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateArcs(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const radius = 200;
  const centerX = 250;
  const centerY = 250;

  const getSkillPosition = (angle) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY + radius * Math.sin(radian)
    };
  };

  const createArcPath = (level) => {
    const circumference = 2 * Math.PI * 30;
    const arcLength = (level / 100) * circumference;
    return arcLength;
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="section-snap min-h-screen py-20 px-4 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 kinetic-text">Compétences</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un écosystème technologique complet pour créer des solutions innovantes 
            et performantes.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Skills Cluster */}
          <div className="relative">
            <svg width="500" height="500" className="overflow-visible">
              {/* Center Logo */}
              <motion.circle
                cx={centerX}
                cy={centerY}
                r="60"
                fill="url(#centerGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              
              <defs>
                <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>

              <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-white font-bold text-lg"
              >
                WAOH
              </text>

              {/* Skills */}
              {skills.map((skill, index) => {
                const position = getSkillPosition(skill.angle);
                const arcLength = createArcPath(skill.level);
                const circumference = 2 * Math.PI * 30;

                return (
                  <g key={skill.name}>
                    {/* Connection Line */}
                    <motion.line
                      x1={centerX}
                      y1={centerY}
                      x2={position.x}
                      y2={position.y}
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />

                    {/* Skill Circle Background */}
                    <circle
                      cx={position.x}
                      cy={position.y}
                      r="32"
                      fill="rgba(255,255,255,0.1)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                    />

                    {/* Progress Arc */}
                    <motion.circle
                      cx={position.x}
                      cy={position.y}
                      r="30"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference - arcLength}
                      transform={`rotate(-90 ${position.x} ${position.y})`}
                      initial={{ strokeDashoffset: circumference }}
                      animate={animateArcs ? { strokeDashoffset: circumference - arcLength } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className="skill-arc"
                    />

                    {/* Skill Name */}
                    <text
                      x={position.x}
                      y={position.y - 5}
                      textAnchor="middle"
                      className="fill-white font-semibold text-xs"
                    >
                      {skill.name}
                    </text>

                    {/* Skill Level */}
                    <text
                      x={position.x}
                      y={position.y + 8}
                      textAnchor="middle"
                      className="fill-gray-300 text-xs"
                    >
                      {skill.level}%
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Skills List */}
          <div className="space-y-6 max-w-md">
            <h3 className="text-2xl font-bold mb-6">Technologies Maîtrisées</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism p-4 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
