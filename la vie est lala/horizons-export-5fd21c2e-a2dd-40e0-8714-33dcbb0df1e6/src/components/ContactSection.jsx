
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "🚧 Fonctionnalité en développement",
        description: "L'envoi de messages n'est pas encore implémenté—mais ne vous inquiétez pas ! Vous pouvez le demander dans votre prochaine requête ! 🚀"
      });
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-300' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@waoh.dev', href: 'mailto:contact@waoh.dev' },
    { icon: Phone, text: '+33 6 12 34 56 78', href: 'tel:+33612345678' },
    { icon: MapPin, text: 'Paris, France', href: '#' }
  ];

  const handleSocialClick = (label) => {
    toast({
      title: "🚧 Fonctionnalité en développement",
      description: `Le lien vers ${label} n'est pas encore implémenté—mais ne vous inquiétez pas ! Vous pouvez le demander dans votre prochaine requête ! 🚀`
    });
  };

  const handleContactClick = (type) => {
    toast({
      title: "🚧 Fonctionnalité en développement",
      description: `L'action ${type} n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀`
    });
  };

  return (
    <section id="contact" className="section-snap min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 kinetic-text">Contact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prêt à donner vie à votre projet ? Discutons de vos idées et 
            créons ensemble quelque chose d'extraordinaire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="chat-bubble p-6">
              <h3 className="text-2xl font-bold mb-4">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="loading-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* 3D Business Card */}
            <div className="glass-morphism p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-2xl font-bold">W</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">WAOH</h3>
              <p className="text-gray-300 mb-4">Développeur Créatif</p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleContactClick(info.text)}
                  className="w-full glass-morphism p-4 flex items-center space-x-4 hover:scale-105 transition-all duration-300 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <info.icon className="text-blue-400" size={24} />
                  <span>{info.text}</span>
                </motion.button>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-morphism p-6">
              <h4 className="text-lg font-semibold mb-4 text-center">Suivez-moi</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSocialClick(social.label)}
                    className={`social-icon p-3 rounded-full bg-white/10 ${social.color} transition-all duration-300`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={24} />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
