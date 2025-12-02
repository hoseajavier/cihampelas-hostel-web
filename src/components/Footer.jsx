import React from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import logoCihHostel from "../assets/cih-hostel.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-12">
        {/* Kolom Kiri: Kontak */}
        <div>
          <Link to="/" className="inline-block mb-6">
            <img
              src={logoCihHostel}
              alt="Cihampelas Hostel Logo"
              className="w-40 object-contain"
            />
          </Link>
          <p className="text-gray-400 mb-6">
            Jl. Pelesiran No.71, Bandung, West Java.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/6287722464987"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
            >
              <Phone size={20} className="text-green-500" />
              <span>Info: +62 877-2246-4987</span>
            </a>
            <a
              href="https://wa.me/6287825972927"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
            >
              <Calendar size={20} className="text-blue-400" />
              <span>Survey: +62 878-2597-2927</span>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Bank */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Bank Transfer</h3>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-colors duration-300">
            <p className="text-sm text-gray-400 mb-2">
              BCA (Bank Central Asia)
            </p>
            <p className="text-2xl font-mono text-white tracking-widest mb-1 select-all">
              5173 120 680
            </p>
            <p className="text-gray-400">a.n HERWIANTO MUCHTAR</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Cihampelas Hostel. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
