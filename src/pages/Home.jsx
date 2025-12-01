import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Wifi,
  Tv,
  Wind,
  ShowerHead,
  CheckCircle,
  ShieldAlert,
  Phone,
  Calendar,
  CreditCard,
  User,
  Users,
  AlertTriangle,
  Volume2,
  VolumeX,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";
import tourVideo from "../assets/hostel-tour.mp4";

// --- IMPORT GAMBAR ROOM UNTUK PRICING ---
import r101_5 from "../assets/rooms/101 (5).jpg";
import r102_2 from "../assets/rooms/102 (2).jpg";
import r103_2 from "../assets/rooms/103 (2).jpg";
import r104_3 from "../assets/rooms/104 (3).jpg";
import r105_2 from "../assets/rooms/105 (2).jpg";
import r106_2 from "../assets/rooms/106 (2).jpg";

const Home = () => {
  // --- STATE VIDEO ---
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  // Data Rates dengan Image
  const roomRates = [
    {
      id: "101",
      daily: "190.000",
      weekly: "1.200.000",
      monthly: "1.900.000",
      image: r101_5,
    },
    {
      id: "102",
      daily: "200.000",
      weekly: "1.300.000",
      monthly: "2.000.000",
      image: r102_2,
    },
    {
      id: "103",
      daily: "160.000",
      weekly: "900.000",
      monthly: "1.600.000",
      image: r103_2,
    },
    {
      id: "104",
      daily: "170.000",
      weekly: "1.000.000",
      monthly: "1.700.000",
      image: r104_3,
    },
    {
      id: "105",
      daily: "180.000",
      weekly: "1.100.000",
      monthly: "1.800.000",
      image: r105_2,
    },
    {
      id: "106",
      daily: "190.000",
      weekly: "1.200.000",
      monthly: "1.900.000",
      image: r106_2,
    },
  ];

  const amenities = [
    {
      icon: <Wind size={32} />,
      title: "Air Conditioner",
      desc: "Cool & comfortable rooms",
    },
    {
      icon: <Wifi size={32} />,
      title: "High-Speed WiFi",
      desc: "Stay connected 24/7",
    },
    {
      icon: <Tv size={32} />,
      title: "Netflix Ready",
      desc: "Entertainment included",
    },
    {
      icon: <ShowerHead size={32} />,
      title: "Hot Shower",
      desc: "Private bathroom inside",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Fully Furnished",
      desc: "Bed, Desk, Wardrobe, Pantry",
    },
    {
      icon: <MapPin size={32} />,
      title: "Strategic Location",
      desc: "3 Mins walk to Ciwalk",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans pt-20">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full px-6 py-16 md:py-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="px-4 py-1.5 bg-yellow-400 text-blue-900 font-bold text-xs tracking-widest uppercase rounded-full mb-6 shadow-sm">
          Welcome to Cihampelas Hostel
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
          Comfort & Convenience <br />
          <span className="text-blue-600">at Cihampelas Hostel</span>
        </h1>
        <p className="text-gray-600 max-w-2xl text-lg mb-10 leading-relaxed">
          Experience the best stay just a{" "}
          <strong>3-minute walk from Cihampelas Walk (Ciwalk)</strong>. Fully
          furnished rooms designed for your comfort, perfect for daily, weekly,
          or monthly stays.
        </p>

        <div className="flex gap-4">
          <a
            href="#pricing"
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:-translate-y-1"
          >
            View Rates
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-blue-600 border border-blue-200 font-bold rounded-full shadow-sm hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* --- BOOKING BOX --- */}
      <section className="w-full px-6 mt-12 mb-20 flex justify-center relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-full max-w-4xl bg-blue-100/50 rounded-[3rem] blur-3xl -z-10"></div>

        <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="text-center mb-8 relative">
            <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-full mb-4">
              <CalendarCheck size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
              Book Your Room Now
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Fill in the details below to check real-time availability dan book
              directly via our official WhatsApp.
            </p>
            <div className="w-16 h-1.5 bg-yellow-400 rounded-full mx-auto mt-4"></div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const phone = e.target.phone.value;
              const guest = e.target.guest.value;

              const message = `Halo, saya ingin memesan kamar di Cihampelas Hostel.%0A%0A• Nama: ${name}%0A• No HP/WhatsApp: ${phone}%0A• Jumlah Tamu: ${guest} orang%0A%0AMohon info kamar yang tersedia saat ini.`;

              const waUrl = `https://wa.me/6287722464987?text=${message}`;
              window.open(waUrl, "_blank");
            }}
            className="space-y-5"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <User size={20} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-gray-800 placeholder:text-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Phone size={20} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp Number"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-gray-800 placeholder:text-gray-400"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Users size={20} />
                </div>
                <input
                  type="number"
                  name="guest"
                  placeholder="Guests (e.g., 1)"
                  required
                  min="1"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              <span>Check Availability via WhatsApp</span>
            </button>
            <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
              <ShieldAlert size={14} className="text-green-500" />
              Direct booking with property owner. Safe & Fast.
            </p>
          </form>
        </div>
      </section>

      {/* --- VIDEO TOUR SECTION --- */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Cihampelas Hostel Tour
            </h2>
            <div className="w-30 h-1 bg-yellow-400 mt-2 rounded-full"></div>
            <p className="text-gray-500 mt-4">
              Take a look inside our comfortable rooms
            </p>
          </div>

          <div className="relative w-full max-w-xs md:max-w-sm mx-auto shadow-2xl rounded-[2.5rem] border-8 border-gray-900 overflow-hidden bg-black transform transition-transform duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20 flex justify-center items-center gap-2">
              <div className="w-12 h-1.5 bg-gray-800 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            </div>

            <video
              ref={videoRef}
              src={tourVideo}
              className="w-full h-[600px] object-cover bg-gray-900"
              autoPlay
              loop
              playsInline
              muted={isMuted}
            />

            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-30 p-3 bg-black/60 backdrop-blur-md text-white rounded-full hover:bg-blue-600 transition-all border border-white/20 active:scale-90"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

            <div className="absolute bottom-6 left-6 text-white z-20">
              <p className="text-xs font-bold bg-yellow-400 text-black px-2 py-1 rounded mb-1 inline-block tracking-wider">
                ROOM TOUR
              </p>
              <p className="font-semibold text-sm drop-shadow-md">
                Watch full experience
              </p>
            </div>

            {isMuted && (
              <div className="absolute bottom-20 right-6 bg-black/70 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm animate-bounce z-30 border border-white/10">
                Tap to Unmute
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- AMENITIES --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Our Amenities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start group"
            >
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-yellow-400 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section
        id="pricing"
        className="bg-blue-900 py-20 px-6 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Room Rates</h2>
            <p className="text-blue-200">
              Flexible pricing for your needs. Daily, Weekly, or Monthly.
            </p>
          </div>

          {/* Grid Harga */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomRates.map((room) => (
              <div
                key={room.id}
                className={`bg-white text-gray-800 rounded-2xl relative overflow-hidden flex flex-col transform transition-all hover:-translate-y-1 ${
                  room.recommend
                    ? "shadow-2xl z-10 scale-105"
                    : "shadow-lg border border-gray-100"
                }`}
              >
                {/* Bagian Gambar Kamar */}
                <div className="h-48 w-full overflow-hidden bg-gray-200 relative">
                  <img
                    src={room.image}
                    alt={`Room ${room.id}`}
                    className="w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                  {/* Badge Room ID di atas Gambar */}
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Room {room.id}
                  </div>

                  {/* Badge Best Value jika ada */}
                  {room.recommend && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider shadow-sm">
                      Best Value
                    </div>
                  )}
                </div>

                {/* Konten Harga */}
                <div className="p-6">
                  {/* Price List Only */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center group">
                      <span className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                        Daily
                      </span>
                      <span className="text-lg font-bold text-gray-800">
                        Rp {room.daily}
                      </span>
                    </div>
                    <div className="flex justify-between items-center group">
                      <span className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                        Weekly
                      </span>
                      <span className="text-lg font-bold text-gray-800">
                        Rp {room.weekly}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50 p-3 rounded-xl -mx-2 border border-blue-100">
                      <span className="text-sm font-bold text-blue-600">
                        Monthly
                      </span>
                      <span className="text-xl font-extrabold text-blue-700">
                        Rp {room.monthly}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- TOMBOL MENUJU HALAMAN ROOMS --- */}
          <div className="mt-16 text-center">
            <p className="text-blue-200 mb-6 text-lg">
              Want to see the room photos and facilities?
            </p>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-blue-900 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-300 hover:shadow-yellow-400/50 hover:-translate-y-1 transition-all duration-300"
            >
              View Room Photos & Details
            </Link>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE CIHAMPELAS HOSTEL --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Why Choose Cihampelas Hostel?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mt-3 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <MapPin className="text-blue-900 mb-3" size={32} />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              3 Minutes to Ciwalk
            </h3>
            <p className="text-gray-600">
              Super strategic location — perfect for students, workers, and
              travelers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <CheckCircle className="text-blue-900 mb-3" size={32} />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Fully Furnished
            </h3>
            <p className="text-gray-600">
              Comes with bed, desk, wardrobe, pantry, hot shower, and private
              bathroom.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <Wifi className="text-blue-900 mb-3" size={32} />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Fast WiFi & Netflix
            </h3>
            <p className="text-gray-600">
              Enjoy unlimited streaming and stable internet connection.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <ShieldAlert className="text-blue-900 mb-3" size={32} />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Safe & Secure
            </h3>
            <p className="text-gray-600">
              Quiet environment with strict house rules for comfort and safety.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <Calendar className="text-blue-900 mb-3" size={32} />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Flexible Stay Options
            </h3>
            <p className="text-gray-600">
              Daily, weekly, and monthly rates available based on your needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <CreditCard className="text-blue-900 mb-3" size={32} />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Affordable Pricing
            </h3>
            <p className="text-gray-600">
              Best value-for-money stay in the Cihampelas area.
            </p>
          </div>
        </div>
      </section>

      {/* --- HOUSE RULES & POLICY --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Rules & Policy</h2>
          <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
              <ShieldAlert size={24} /> General Regulations
            </h3>
            <ul className="space-y-4 text-gray-600 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span> Valid ID
                Card (KTP/Passport) with phone number is mandatory upon
                check-in.
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span> Strictly{" "}
                <strong>NO DRUGS, ALCOHOL, or GAMBLING</strong>.
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span> No pets
                allowed and no strong-smelling food.
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span> Guests are
                responsible for any damage to property.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
              <CreditCard size={24} /> Payment & Occupancy
            </h3>
            <ul className="space-y-4 text-gray-600 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span>{" "}
                <strong>Payment Upfront:</strong> Full payment required before
                occupying.
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span>{" "}
                <strong>Booking:</strong> Min DP Rp 500.000 (valid 15 days).
                Non-refundable.
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span>
                <span>
                  <strong>Occupancy:</strong> Max 1 person/room. Extra person:
                  Rp 500.000/month or Rp 200.000/week.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span>{" "}
                <strong>Parking:</strong> 1 Motorcycle free. Additional: Rp
                200.000/month.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 bg-yellow-50 border border-yellow-200 p-6 rounded-xl flex items-start gap-4">
          <AlertTriangle className="text-yellow-600 shrink-0" />
          <div>
            <h4 className="font-bold text-yellow-800 mb-1">Visitor Policy</h4>
            <p className="text-sm text-yellow-700">
              Visitors are generally <strong>not allowed</strong> to enter or
              stay. Exceptions for immediate family with approval (max until
              22:00 WIB).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
