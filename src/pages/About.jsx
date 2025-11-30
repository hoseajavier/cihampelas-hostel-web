import React, { useEffect } from 'react';
import { MapPin, Calendar, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoCihampelasHostel from "../assets/logo-cih-hostel.jpg"

const About = () => {
  // Pastikan scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans pt-0">
      
      {/* --- HERO SECTION (Tanpa Background Image) --- */}
      {/* - pt-32 md:pt-48 : Memberikan jarak yang cukup dari atas agar tidak tertutup Navbar 
          - Text Color : Diubah menjadi gelap (blue-900 & gray-600) karena background putih
      */}
      <div className="w-full pt-32 pb-12 md:pt-48 md:pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
        
          {/* Judul Utama */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
            More Than Just A Room. <br/>
            {/* Gradient Text disesuaikan agar kontras di background putih */}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-yellow-500">
              It's Your Second Home.
            </span>
          </h1>
          
          {/* Deskripsi */}
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Providing comfortable daily, weekly, and monthly rentals in the most strategic location in Bandung.
          </p>
        </div>
      </div>

      {/* --- STORY SECTION --- */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-xl border-8 border-white bg-gray-100">
              <img 
                src={logoCihampelasHostel} 
                alt="Comfortable Room" 
                className="w-full h-auto object-cover transform transition duration-700"
              />
            </div>
            {/* Dekorasi Kotak */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-50 rounded-full -z-10"></div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
              Who We Are
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              A Sanctuary in the Middle of <span className="text-blue-600 underline decoration-yellow-400 underline-offset-4">Bandung's Hustle</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                <strong>Cihampelas Hostel</strong> is here to answer the need for flexible, clean, and affordable living spaces. Located at <em>Jl. Pelesiran No.71</em>, we are situated right in the heart of Bandung's bustling city life.
              </p>
              <p>
                We understand that everyone has different stay duration needs. Whether you are a traveler needing a night's rest (<strong>Daily</strong>), a professional on a business trip (<strong>Weekly</strong>), or a student/worker needing a permanent residence (<strong>Monthly</strong>), we are ready to welcome you.
              </p>
              <p>
                Our philosophy is simple: <strong>"Bringing the comfort of home into every room."</strong> Complete facilities, guaranteed security, and friendly service are our top priorities.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- CORE VALUES (Grid) --- */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Calendar size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible Duration</h3>
              <p className="text-gray-500 leading-relaxed">
                No rigid yearly contracts. We serve <strong>Daily, Weekly, and Monthly</strong> rentals tailored to your specific needs.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Prime Location</h3>
              <p className="text-gray-500 leading-relaxed">
                Only a <strong>3-minute walk</strong> to Cihampelas Walk (Ciwalk). Easy access to ITB, Baltos, and the city's main tourist attractions.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Safe & Secure</h3>
              <p className="text-gray-500 leading-relaxed">
                A safe, quiet, and monitored environment. Your privacy is our priority to ensure you get the maximum quality of rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUOTE / VISION --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-blue-900 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
          {/* Dekorasi Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6 text-yellow-400 gap-1">
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
            </div>
            <h2 className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed mb-8">
              "We believe that a great stay isn't just about a soft bed, but about the feeling of being home even when you're far away."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden border-2 border-white">
                 {/* Placeholder Owner Photo */}
                 <img src="https://ui-avatars.com/api/?name=Cihampelas+Hostel&background=fbbf24&color=1e3a8a" alt="Owner" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg">Cihampelas Hostel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience Comfort?</h2>
        <div className="flex justify-center gap-4">
          <Link to="/rooms" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all">
            View Rooms
          </Link>
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-blue-600 border border-blue-200 font-bold rounded-full shadow-sm hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;