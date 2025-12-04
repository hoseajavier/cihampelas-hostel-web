import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/cih-hostel.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "ROOMS", path: "/rooms" },
    { name: "NEARBY ATTRACTIONS", path: "/nearby-attractions" },
  ];

  // Helper untuk menentukan apakah link sedang aktif
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`
        w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out
        ${
          scrolled || open
            ? "bg-white/95 backdrop-blur-md shadow-md py-2" // Tampilan saat discroll (Putih & Blur)
            : "bg-transparent py-6" // Tampilan saat di atas (Transparan & Lebih Besar)
        }
      `}
    >
      {/* Container dengan padding besar agar logo lebih ke tengah/kanan */}
      <div className="w-full mx-auto flex items-center justify-between px-6 md:px-16 lg:px-24">
        {/* LOGO SECTION */}
        <Link to="/" className="shrink-0 group">
          <img
            src={logo}
            alt="Cihampelas Hostel Logo"
            className={`
              object-contain transition-all duration-500
              h-14 w-auto md:h-18 
              group-hover:scale-105 drop-shadow-sm
            `}
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`
                relative text-sm font-bold tracking-widest uppercase
                transition-colors duration-300
                ${
                  // Ubah warna teks tergantung background (scroll/top)
                  scrolled
                    ? isActive(item.path)
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                    : isActive(item.path)
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }
              `}
            >
              {item.name}

              {/* Animasi Garis Bawah (Mekar dari Tengah) */}
              <span
                className={`
                  absolute left-1/2 -bottom-2 h-0.5px bg-blue-600 
                  transform -translate-x-1/2 transition-all duration-300 ease-out
                  ${
                    isActive(item.path)
                      ? "w-full"
                      : "w-0 group-hover:w-full hover:w-full"
                  }
                `}
              ></span>
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-gray-800"
          }`}
        >
          {open ? <X size={29} /> : <Menu size={29} />}
        </button>
      </div>

      {/* MOBILE MENU (Compact Dropdown Style) */}
      <div
        className={`
          md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100
          transform transition-all duration-300 ease-in-out origin-top
          ${
            open
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="
                block text-center text-sm font-bold text-gray-700 tracking-widest uppercase
                hover:text-blue-600 hover:bg-gray-50 py-3 rounded-lg transition-colors
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
