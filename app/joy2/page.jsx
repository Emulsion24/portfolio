'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Clock, Star, Monitor, CheckCircle2,
  Wrench, MessageCircle, Laptop, Smartphone, Headphones, Tv,
  ShieldCheck, Truck, HeadphonesIcon
} from 'lucide-react';

// --- Framer Motion Animations ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const floatAnimation = {
  animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
};

// --- Reusable Professional Card ---
const FeatureCard = ({ children, className = '' }) => (
  <motion.div 
    variants={fadeUp}
    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    className={`bg-white border border-slate-100 shadow-sm rounded-2xl p-8 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default function ProfessionalElectronicsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      
      {/* Top Bar (Very corporate) */}
      <div className="hidden md:block bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> Available for Calls & WhatsApp</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon-Sat: 9:30 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-blue-300" /> 100% Genuine Products
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
            <span className="text-xl md:text-2xl font-extrabold text-blue-950 tracking-tight">
              Joyguru Tech
            </span>
            <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase">JioMart Digital Partner</span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#products" className="hover:text-blue-600 transition-colors">Products</a>
            <a href="#reviews" className="hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#contact" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium">
              Visit Store
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-32 px-4 md:px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left: Professional Text Content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center lg:text-left">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 text-blue-700">
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <span className="text-sm font-semibold">4.8/5 Rated on Justdial</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
              Your Trusted Partner in <br />
              <span className="text-blue-600">Modern Electronics</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sarenga's premier destination for genuine laptops, smartphones, home appliances, and expert tech repairs. Experience quality service backed by JioMart Digital.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all">
                <MapPin className="w-5 h-5" /> Get Directions
              </a>
              <a href="https://wa.me/" className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all">
                <MessageCircle className="w-5 h-5 text-green-500" /> WhatsApp Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Clean Product Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full"
          >
            {/* Soft glow behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-400/20 blur-[80px] rounded-full pointer-events-none"></div>

            {/* Center Main Laptop */}
            <motion.div variants={floatAnimation} animate="animate" className="absolute top-[20%] left-[10%] w-[80%] z-20">
              <img 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop" 
                alt="Premium Laptop" 
                className="w-full rounded-2xl shadow-2xl border border-white object-cover aspect-video"
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[5%] right-[0%] w-[35%] z-30"
            >
              <img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop" 
                alt="Smartphone" 
                className="w-full rounded-2xl shadow-xl border-4 border-white object-cover"
              />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[10%] left-[0%] w-[40%] z-30"
            >
               <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Headphones" 
                  className="w-full rounded-2xl shadow-xl border-4 border-white object-cover aspect-square"
                />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Trust Indicators Banner */}
      <section className="bg-white border-y border-slate-200 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
              <p className="font-semibold text-slate-800">Authorized Partner</p>
              <p className="text-xs text-slate-500">100% Genuine Brands</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-yellow-500 mb-2" />
              <p className="font-semibold text-slate-800">Top Rated</p>
              <p className="text-xs text-slate-500">4.8/5 on Justdial</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-8 h-8 text-blue-600 mb-2" />
              <p className="font-semibold text-slate-800">Fast Fulfillment</p>
              <p className="text-xs text-slate-500">In-store pickup & delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <HeadphonesIcon className="w-8 h-8 text-blue-600 mb-2" />
              <p className="font-semibold text-slate-800">Expert Support</p>
              <p className="text-xs text-slate-500">Professional tech repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 relative px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600">Providing comprehensive tech solutions and authentic digital products to the Sarenga community.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
            variants={staggerContainer} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Consumer Electronics</h3>
              <p className="text-slate-600 leading-relaxed">Shop a wide selection of smartphones, laptops, smart TVs, and essential home appliances from top-tier brands.</p>
            </FeatureCard>

            <FeatureCard>
              <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">JioMart Digital</h3>
              <p className="text-slate-600 leading-relaxed">As an authorized Jio partner, we bring you exclusive digital deals, assured warranties, and reliable customer service.</p>
            </FeatureCard>

            <FeatureCard>
              <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Repairs</h3>
              <p className="text-slate-600 leading-relaxed">Experiencing hardware issues? Our skilled technicians provide fast diagnostics and reliable repairs for laptops and mobiles.</p>
            </FeatureCard>
          </motion.div>
        </div>
      </section>

      {/* Clean Product Gallery */}
      <section id="products" className="py-20 relative px-4 md:px-6 bg-white border-y border-slate-200">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Shop By Category</h2>
            <p className="text-slate-600 max-w-2xl">Browse our extensive inventory of genuine tech products. Visit our store to experience them hands-on.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
            variants={staggerContainer} 
            className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6"
          >
            {[
              { src: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042", label: "Laptops & Computers", col: "md:col-span-2", row: "md:row-span-2", icon: Laptop },
              { src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000", label: "Smartphones", col: "md:col-span-1", row: "md:row-span-1", icon: Smartphone },
              { src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000", label: "Audio & Accessories", col: "md:col-span-1", row: "md:row-span-1", icon: Headphones },
              { src: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070", label: "Smart TVs", col: "md:col-span-2", row: "md:row-span-1", icon: Tv },
            ].map((photo, index) => (
              <motion.div 
                key={index} variants={fadeUp} 
                className={`relative group rounded-2xl overflow-hidden bg-slate-100 ${photo.col} ${photo.row}`}
              >
                <img 
                  src={photo.src} alt={photo.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {/* Clean gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                    <photo.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{photo.label}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional Reviews Section */}
      <section id="reviews" className="py-20 bg-slate-50 relative px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm mb-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
              <span className="font-bold text-slate-800 text-sm">Google & Justdial Reviews</span>
              <span className="font-bold text-blue-600 ml-1">4.8/5</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">What Our Customers Say</h2>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <FeatureCard className="bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">S</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Sourav Mondal</h4>
                  <div className="flex text-yellow-400 mt-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current"/>)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">"Best electronics shop in Sarenga! Got my new smartphone from here. The owner is very polite and explained all features patiently. Highly recommended."</p>
            </FeatureCard>

            <FeatureCard className="bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">P</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Priya Chatterjee</h4>
                  <div className="flex text-yellow-400 mt-1">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current"/>)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">"They have a great collection of genuine JioMart products. Bought a smart TV and the installation was done the very same day. Excellent service!"</p>
            </FeatureCard>

            <FeatureCard className="bg-white hidden md:block">
               <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center">A</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Amitabh Sen</h4>
                  <div className="flex text-yellow-400 mt-1">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current"/>)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">"Trustworthy shop for tech repairs. My laptop was running dead slow, and they fixed it within 24 hours at a very reasonable cost. Very professional."</p>
            </FeatureCard>
          </motion.div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-20 bg-white border-t border-slate-200 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">Visit Our Showroom</h2>
              <p className="text-slate-600">Conveniently located in Sarenga. Drop by to experience our products hands-on or speak with our repair technicians.</p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Store Address", detail: "Chhota, School Road, Sarenga, Bankura - 722150, WB" },
                { icon: Clock, title: "Business Hours", detail: "Monday - Saturday: 9:30 AM - 8:00 PM (Closed Sundays)" },
                { icon: Phone, title: "Contact Support", detail: "Available for Calls & WhatsApp inquiries" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg shadow-md transition-all"
            >
              Open in Google Maps
            </a>
          </motion.div>

          {/* Standard Light Mode Map Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg"
          >
            {/* Standard un-filtered iframe for professional look */}
            <iframe 
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.732943241029!2d87.0315486!3d23.6318991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76f4e41416e75%3A0x600f7e1b5b210f4!2sSchool%20Road%2C%20Sarenga%2C%20Bankura%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full"
              style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </motion.div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="border-t border-slate-200 py-8 text-center bg-slate-50 px-4">
        <div className="container mx-auto">
          <p className="text-slate-600 font-medium text-sm">
            © {new Date().getFullYear()} Joyguru Tech Solutions. All rights reserved. <br className="md:hidden"/> 
            <span className="text-slate-500 mt-2 block md:inline md:mt-0 md:ml-2">
              Authorized JioMart Digital Partner | Sarenga, Bankura
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}