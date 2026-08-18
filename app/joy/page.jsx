'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Clock, Star, Monitor, CheckCircle2,
  Wrench, MessageCircle, Cpu, Laptop, 
  Printer, Keyboard, Server
} from 'lucide-react';

// --- Framer Motion Animations ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// Next-Gen Text Reveal Animation
const textRevealContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
};

const textRevealChar = {
  hidden: { opacity: 0, y: 40, rotateX: -90, color: "#c026d3" },
  visible: { opacity: 1, y: 0, rotateX: 0, color: "#f8fafc", transition: { duration: 0.5, ease: "easeOut" } }
};

const AnimatedText = ({ text }) => {
  return (
    <motion.span variants={textRevealContainer} initial="hidden" animate="visible" className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={textRevealChar} className="inline-block" style={{ textShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Floating Images Animation (Products)
const floatImages = {
  center: { animate: { y: [0, -12, 0], rotateZ: [0, 1, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } } },
  topRight: { animate: { y: [0, -15, 0], rotate: [-2, 2, -2], transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } } },
  bottomLeft: { animate: { y: [0, -10, 0], rotate: [2, -2, 2], transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 } } },
  bottomRight: { animate: { y: [0, -12, 0], rotate: [-1, 1, -1], transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 } } }
};

// --- Reusable Glass Card ---
const GlassCard = ({ children, className = '' }) => (
  <motion.div 
    variants={fadeUp}
    whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(6, 182, 212, 0.2)" }}
    className={`bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:border-cyan-500/40 ${className}`}
  >
    {children}
  </motion.div>
);

export default function DigitalElectronicsShop() {
  return (
    <div className="min-h-screen bg-[#050508] font-sans text-slate-100 selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Background Grid & Glowing Orbs (Replaces 3D Objects) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Animated Cyberpunk Glows */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-600/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] bg-fuchsia-600/20 rounded-full blur-[140px]"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#050508]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
            <span className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400 tracking-tight">
              Joyguru Tech
            </span>
            <span className="text-[10px] font-bold text-fuchsia-500 tracking-widest uppercase">JioMart Partner</span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
            <a href="#services" className="text-zinc-400 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#products" className="text-zinc-400 hover:text-cyan-400 transition-colors">Products</a>
            <a href="#contact" className="text-zinc-400 hover:text-cyan-400 transition-colors">Contact</a>
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all font-bold">
              Shop Now
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 px-4 md:px-6 min-h-[95vh] flex items-center overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left: Text Content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-20 text-center lg:text-left mt-10 lg:mt-0">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 backdrop-blur-md">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-cyan-400 fill-cyan-400" />
              <span className="text-xs md:text-sm font-bold text-cyan-100 tracking-wide">Top Rated Digital Store • 4.8/5</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-6 drop-shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">
                Experience Next-Gen
              </span>
              <br />
              {/* Electronics TEXT REVEAL */}
              <AnimatedText text="ELECTRONICS." />
            </h1>
            
            <motion.p variants={fadeUp} className="text-base md:text-lg text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Sarenga's ultimate destination for premium laptops, custom PCs, smart devices, printers, and JioMart Digital exclusives. Step into the future of technology.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-bold rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all">
                <MapPin className="w-5 h-5" /> Visit Showroom
              </a>
              <a href="https://wa.me/" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all backdrop-blur-md">
                <MessageCircle className="w-5 h-5 text-emerald-400" /> Chat With Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Floating Product Photos Grid */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] w-full perspective-1000 mt-10 lg:mt-0">
            
            {/* 1. Center Main: Requested Laptop Photo */}
            <motion.div variants={floatImages.center} animate="animate" className="absolute top-[35%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 w-[75%] sm:w-[65%] z-20">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop" 
                  alt="Premium Laptop" 
                  className="w-full rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-cyan-500/30 object-cover aspect-video"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#09090b] p-3 rounded-xl border border-cyan-500/50 shadow-xl hidden sm:block">
                  <Laptop className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            </motion.div>

            {/* 2. Top Right: Custom PC Cabinet */}
            <motion.div variants={floatImages.topRight} animate="animate" className="absolute top-[0%] right-[0%] w-[40%] sm:w-[35%] z-10">
              <img 
                src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=2070&auto=format&fit=crop" 
                alt="Gaming PC" 
                className="w-full rounded-2xl shadow-2xl border border-fuchsia-500/30 object-cover aspect-[3/4] opacity-90"
              />
            </motion.div>

            {/* 3. Bottom Left: Mechanical Keyboard */}
            <motion.div variants={floatImages.bottomLeft} animate="animate" className="absolute bottom-[5%] left-[0%] w-[45%] sm:w-[40%] z-30">
               <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071&auto=format&fit=crop" 
                  alt="Mechanical Keyboard" 
                  className="w-full rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-violet-500/30 object-cover aspect-video"
                />
                <div className="absolute -top-3 -left-3 bg-violet-600 p-2 rounded-lg shadow-lg">
                  <Keyboard className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* 4. Bottom Right: Modern Printer */}
            <motion.div variants={floatImages.bottomRight} animate="animate" className="absolute bottom-[10%] right-[10%] w-[35%] sm:w-[30%] z-30">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop" 
                  alt="Office Printer" 
                  className="w-full rounded-xl shadow-2xl border border-white/10 object-cover aspect-square"
                />
                <div className="absolute -bottom-3 -right-3 bg-zinc-900 border border-zinc-700 p-2 rounded-lg shadow-lg">
                  <Printer className="w-5 h-5 text-zinc-300" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative z-10 px-4 md:px-6 bg-[#030305] border-y border-white/5">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
            variants={staggerContainer} 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <GlassCard>
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Computers & Tech</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">From ultra-thin productivity laptops to high-end custom PC setups, printers, and premium accessories.</p>
            </GlassCard>

            <GlassCard>
              <div className="w-14 h-14 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-fuchsia-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">JioMart Digital</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">As an authorized partner, we offer 100% genuine appliances and smart home devices with full warranty support.</p>
            </GlassCard>

            <GlassCard>
              <div className="w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-violet-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Expert Diagnostics</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Professional repair services. We upgrade slow laptops, fix hardware issues, and provide reliable IT support.</p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Product Categories (Gallery) */}
      <section id="products" className="py-20 relative z-10 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
              className="text-3xl md:text-4xl font-black mb-4"
            >
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Top Categories</span>
            </motion.h2>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
            variants={staggerContainer} 
            className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4"
          >
            {[
              { src: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042", label: "Laptops & PCs", col: "md:col-span-2", row: "md:row-span-2", icon: Laptop },
              { src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070", label: "Components", col: "md:col-span-1", row: "md:row-span-1", icon: Cpu },
              { src: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070", label: "Printers", col: "md:col-span-1", row: "md:row-span-1", icon: Printer },
              { src: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071", label: "Accessories", col: "md:col-span-2", row: "md:row-span-1", icon: Keyboard },
            ].map((photo, index) => (
              <motion.div 
                key={index} variants={fadeUp} 
                className={`relative group rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#09090b] ${photo.col} ${photo.row}`}
              >
                <img 
                  src={photo.src} alt={photo.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-3">
                  <photo.icon className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h4 className={`text-lg md:text-xl font-bold text-white mb-1 tracking-wide`}>{photo.label}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10 px-4 md:px-6 border-t border-white/5 bg-[#020203]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-3 text-white">Our <span className="text-cyan-400">Location</span></h2>
              <p className="text-zinc-400 text-sm md:text-base font-medium">Visit our physical store to browse our electronics catalog in person.</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                { icon: MapPin, title: "Address", detail: "Chhota, School Road, Sarenga, Bankura - 722150", color: "text-fuchsia-400", border: "border-fuchsia-500/30" },
                { icon: Clock, title: "Store Hours", detail: "Mon - Sat: 9:30 AM - 8:00 PM (Sun Closed)", color: "text-cyan-400", border: "border-cyan-500/30" },
                { icon: Phone, title: "Contact Us", detail: "Available for Calls & WhatsApp inquiries", color: "text-violet-400", border: "border-violet-500/30" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-6 bg-white/[0.02] p-4 md:p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                  <div className={`w-12 h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center border ${item.border}`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base md:text-lg">{item.title}</h4>
                    <p className="text-zinc-400 text-sm md:text-base font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
              Get Directions via Google Maps
            </button>
          </motion.div>

          {/* Map Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
          >
            {/* Dark Mode Map Filter */}
            <iframe 
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.732943241029!2d87.0315486!3d23.6318991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76f4e41416e75%3A0x600f7e1b5b210f4!2sSchool%20Road%2C%20Sarenga%2C%20Bankura%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full filter invert-[90%] hue-rotate-180 contrast-[1.2] opacity-80 transition-all duration-700 group-hover:filter-none group-hover:opacity-100"
              style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0 z-10">
              <div className="w-16 h-16 bg-[#050508]/80 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] animate-pulse">
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="bg-[#050508]/90 px-4 py-2 rounded-full mt-3 border border-white/10 backdrop-blur-md">
                <p className="text-white font-bold text-xs md:text-sm">Joyguru Tech Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center bg-[#000000] relative z-10 px-4">
        <p className="text-zinc-500 font-medium text-sm">
          © {new Date().getFullYear()} Joyguru Tech Solutions. <br className="md:hidden"/> 
          <span className="text-zinc-600 mt-2 block md:inline md:mt-0 md:ml-2">
            Authorized JioMart Digital Partner | Sarenga, Bankura
          </span>
        </p>
      </footer>
    </div>
  );
}