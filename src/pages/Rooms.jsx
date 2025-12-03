import React, { useState, useEffect, useRef } from 'react';
import { Check, MessageCircle, Maximize, Play, Pause, Volume2, VolumeX, PlayCircle } from 'lucide-react';

// --- IMPORT DATA ---
import { roomsData } from '../data/RoomsData';

// --- IMPORT ASSETS (GAMBAR & VIDEO) ---
import detailSizeRoom from "../assets/detail-size-room.jpg";
import tour101 from "../assets/r101_tour.mp4";
import tour102 from "../assets/r102_tour.mp4";
import tour103 from "../assets/r103_tour.mp4";
import tour104 from "../assets/r104_tour.mp4";
import tour105 from "../assets/r105_tour.mp4";
import tour106 from "../assets/r106_tour.mp4";

// Mapping ID Kamar ke File Video agar mudah dipanggil
const videoMap = {
  101: tour101,
  102: tour102,
  103: tour103,
  104: tour104,
  105: tour105,
  106: tour106,
};

// --- SUB-COMPONENT: ROOM CARD (INFO HARGA & FOTO) ---
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
          <div className="flex items-center gap-2 mb-4 text-gray-700 font-semibold bg-blue-50/50 p-2 rounded-lg border border-blue-100">
             <Maximize size={20} className="text-blue-600" />
             <span>Size: {room.roomSize}</span>
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

// --- SUB-COMPONENT: VIDEO CARD ---
const VideoCard = ({ videoSrc, roomId }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Fungsi Toggle Play/Pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Fungsi Toggle Mute/Unmute
  const toggleMute = (e) => {
    e.stopPropagation(); // Mencegah trigger togglePlay saat klik tombol mute
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-black rounded-3xl shadow-lg overflow-hidden h-full min-h-[400px] relative group border border-gray-800 flex flex-col justify-center">
      
      {/* --- VIDEO PLAYER --- */}
      <video 
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
        loop 
        muted={isMuted}
        playsInline
      />

      {/* --- OVERLAY PLAY BUTTON (Muncul saat Pause) --- */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-all hover:bg-black/30"
          onClick={togglePlay}
        >
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-6 text-white shadow-2xl transform transition-transform hover:scale-110">
            <Play size={48} fill="currentColor" className="ml-2" /> {/* Icon Play */}
          </div>
        </div>
      )}

      {/* --- LABEL LIVE TOUR (Pojok Kanan Atas) --- */}
      <div className="absolute top-4 right-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md pointer-events-none">
        <PlayCircle size={14} /> Room Tour
      </div>

      {/* --- CONTROLS BAR (Bawah) --- */}
      <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/90 via-black/50 to-transparent p-6 flex justify-between items-end transition-opacity duration-300">
        
        {/* Info Text */}
        <div className="text-white">
           <p className="font-bold text-lg">Room {roomId}</p>
           <p className="text-gray-300 text-xs flex items-center gap-2">
             {isPlaying ? (
               <span className="flex items-center gap-1 text-green-400"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Now Playing</span>
             ) : (
               <span className="text-gray-400">Paused</span>
             )}
           </p>
        </div>

        {/* Tombol Mute / Unmute */}
        <button 
          onClick={toggleMute}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full text-white border border-white/20 transition-all active:scale-95"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

      </div>
    </div>
  );
};

// --- COMPONENT UTAMA: ROOMS PAGE ---
const Rooms = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-0">
      
      {/* HERO SECTION - Updated: Video diganti Floor Plan Image */}
      <section className="bg-white pt-32 pb-16 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Kolom Kiri: Teks */}
          <div className="flex-1 text-center md:text-left">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
              Cozy & Affordable
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
              Find Your Perfect <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-yellow-500">Living Space</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Explore our fully furnished rooms. Clean, comfortable, and strategic. 
              Check the floor plan on the right to see the layout.
            </p>
            
            {/* Fasilitas Icons */}
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
            </div>
          </div>

          {/* Kolom Kanan: Floor Plan Image (Menggantikan Video Header) */}
          <div className="flex-1 w-full max-w-lg">
             <div className="bg-white p-2 rounded-4xl shadow-2xl border-4 border-gray-100">
               <div className="relative overflow-hidden rounded-3xl">
                  <img 
                    src={detailSizeRoom} 
                    alt="Floor Plan Denah" 
                    className="w-full h-auto"
                  />
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* ROOMS & VIDEOS GRID SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Room Details & Tours</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">Compare prices and watch the room video side-by-side</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {roomsData.map((room) => (
            <React.Fragment key={room.id}>
              <RoomCard room={room} />
          
              <VideoCard videoSrc={videoMap[room.id]} roomId={room.id} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;