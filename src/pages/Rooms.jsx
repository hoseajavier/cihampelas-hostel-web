import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Check, MessageCircle, Maximize } from 'lucide-react';

// Import Data dan Video
import { roomsData } from '../data/RoomsData';
import portraitVideo from '../assets/hostel-tour-room.mp4';

// --- SUB-COMPONENT: ROOM CARD ---
const RoomCard = ({ room }) => {
  const [activeImage, setActiveImage] = useState(room.images[0]);

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      
      {/* AREA GAMBAR UTAMA */}
      <div className="relative h-64 bg-gray-100">
        <img 
          src={activeImage} 
          alt={`Room ${room.id}`} 
          className="w-full h-full transition-all duration-500"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
          Room {room.id}
        </div>
      </div>

      {/* THUMBNAIL GALLERY */}
      <div className="flex gap-2 p-3 overflow-x-auto bg-gray-50 scrollbar-hide">
        {room.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(img)}
            className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
              activeImage === img ? 'border-blue-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <img src={img} alt="thumb" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* DETAIL HARGA & FITUR */}
      <div className="p-6 grow flex flex-col justify-between">
        <div>
          {/* --- MENAMPILKAN SIZE KAMAR DISINI --- */}
          <div className="flex items-center gap-2 mb-4 text-gray-700 font-semibold bg-blue-50/50 p-2 rounded-lg border border-blue-100">
             <Maximize size={20} className="text-blue-600" />
             <span>Room Size: {room.roomSize}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {room.features.map((feat, idx) => (
               <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-bold uppercase border border-gray-200">
                 {feat}
               </span>
            ))}
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
              <span className="text-gray-500 text-sm font-medium">Daily</span>
              <span className="text-gray-800 font-bold">Rp {room.price.daily}</span>
            </div>
            <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
              <span className="text-gray-500 text-sm font-medium">Weekly</span>
              <span className="text-gray-800 font-bold">Rp {room.price.weekly}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-xl shadow-sm">
              <span className="text-blue-100 text-sm font-medium">Monthly</span>
              <span className="text-xl font-extrabold">Rp {room.price.monthly}</span>
            </div>
          </div>
        </div>

        <button 
          onClick={() => window.open(`https://wa.me/6287722464987?text=Halo, saya tertarik booking Room ${room.id}. Apakah tersedia?`, '_blank')}
          className="w-full py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} />
          Book Room {room.id}
        </button>
      </div>
    </div>
  );
};

// --- COMPONENT UTAMA: ROOMS PAGE ---
const Rooms = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-0">
      
      {/* HERO SECTION */}
      <section className="bg-white pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
              Cozy & Affordable
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
              Find Your Perfect <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-yellow-500">Living Space</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Explore our fully furnished rooms. Clean, comfortable, and strategic. 
              Watch the room tour to see exactly what you get.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <div className="flex items-center gap-2 text-gray-500">
                 <div className="bg-green-100 p-2 rounded-full text-green-600"><Check size={16} /></div>
                 <span>Air Conditioner</span>
               </div>
               <div className="flex items-center gap-2 text-gray-500">
                 <div className="bg-green-100 p-2 rounded-full text-green-600"><Check size={16} /></div>
                 <span>Free WiFi</span>
               </div>
               <div className="flex items-center gap-2 text-gray-500">
                 <div className="bg-green-100 p-2 rounded-full text-green-600"><Check size={16} /></div>
                 <span>Netflix Ready</span>
               </div>
               <div className="flex items-center gap-2 text-gray-500">
                 <div className="bg-green-100 p-2 rounded-full text-green-600"><Check size={16} /></div>
                 <span>Hot Water</span>
               </div>
            </div>
          </div>

          {/* Video Player (Portrait) */}
          <div className="relative w-full max-w-xs md:max-w-sm mx-auto shadow-2xl rounded-[2.5rem] border-8 border-gray-900 overflow-hidden bg-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>

            <video
              ref={videoRef}
              src={portraitVideo}
              className="w-full h-[550px] object-cover" 
              autoPlay
              loop
              playsInline
              muted={isMuted}
            />

            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-30 p-3 bg-black/60 backdrop-blur-md text-white rounded-full hover:bg-blue-600 transition-all border border-white/20"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/60 to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-6 left-6 text-white z-20">
               <p className="text-xs font-bold bg-yellow-400 text-black px-2 py-1 rounded mb-1 inline-block">ROOM TOUR</p>
               <p className="font-semibold text-sm">See inside the room</p>
            </div>
          </div>

        </div>
      </section>

      {/* ROOMS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Choose Your Room</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;