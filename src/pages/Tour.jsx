import React from "react";
import { MapPin, Clock, Footprints, Car, Navigation } from "lucide-react";

const Tour = () => {
  const walkingSpots = [
    {
      name: "Teras Cihampelas",
      time: "2 min",
      img: "https://travelspromo.com/wp-content/uploads/2021/09/Jembatan-Teras-Cihampelas-Bandung-Yogi-Wijaya.jpg",
      tag: "Iconic",
    },
    {
      name: "Cihampelas Walk (Ciwalk)",
      time: "4 min",
      img: "https://whatsnewindonesia.com/sites/default/files/inline-images/Cihampelas-Walk-750x450.jpg",
      tag: "Shopping",
    },
    {
      name: "Baltos Mall",
      time: "15 min",
      img: "https://s.yimg.com/ny/api/res/1.2/k4NnMDfXqGBf3fC9Y8HJTg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwMDtoPTkzMw--/https://media.zenfs.com/en_SG/News/jackposttravel/e2qt73uwpnkgowggwgc08cc44.jpg",
    },
    {
      name: "Taman Jomblo",
      time: "15 min",
      img: "https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/taman-jomblo.jpg",
    },
    {
      name: "Bandung Zoo",
      time: "20 min",
      img: "https://i.ytimg.com/vi/CkBWxR3WMrU/maxresdefault.jpg",
    },
  ];

  const shortDriveSpots = [
    // < 10 Menit
    {
      name: "Paris Van Java (PVJ)",
      time: "7 min",
      img: "https://tse2.mm.bing.net/th/id/OIP.i1FmRYWhXO3BbG7fnq5i3gHaEK?pid=Api&P=0&h=180",
    },
    {
      name: "Gedung Sate",
      time: "5 min",
      img: "https://www.king-adventure.com/wp-content/uploads/2024/01/Gedung-Sate-1199x800.jpeg",
      tag: "Must Visit",
    },
    {
      name: "Museum Geologi",
      time: "5 min",
      img: "https://jnewsonline.com/wp-content/uploads/2024/07/museum-geologi-cropped.jpg",
    },
    {
      name: "Yoghurt Cisangkuy",
      time: "5 min",
      img: "https://kulinerkota.com/wp-content/uploads/2020/01/Yoghurt-Cisangkuy.jpg",
      tag: "Culinary",
    },
    {
      name: "Factory Outlet Dago & Riau",
      time: "8 min",
      img: "https://rossatraveller.files.wordpress.com/2016/04/factory-outlet-populer-band.png",
      tag: "Shopping",
    },
    {
      name: "Bandung Indah Plaza Mall",
      time: "8 min",
      img: "https://idalamat.com/images/addresses/7043456-bandung-indah-plaza-bip-bandung-jawa-barat.jpg",
    },
    {
      name: "Jalan Braga",
      time: "10 min",
      img: "https://img.sokoguru.id/backend/0418629740186937525/pesona-klasik-jalan-braga-menjelajah-sejarah-dan-kuliner-di-jantung-bandung.webp",
      tag: "Heritage",
    },
    {
      name: "Alun-Alun Bandung",
      time: "10 min",
      img: "https://tourbandung.co.id/wp-content/uploads/2024/10/Alun-alun-Bandung.jpg",
    },
    {
      name: "Pasar Baru Bandung",
      time: "8 min",
      img: "https://beritajakarta.co.id/wp-content/uploads/2024/05/Pasar-Baru-Bandung.jpg",
    },
  ];

  const mediumDriveSpots = [
    // < 30 - 60 Menit
    {
      name: "Kiara Artha Park",
      time: "15 min",
      img: "https://asset-2.tstatic.net/travel/foto/bank/images/Liburan-ke-Kiara-Artha-Park-Bandung-Jawa-Barat-lengkap-dengan-harga-tiket-masuk-terbaru-2024.jpg",
    },
    {
      name: "Trans Studio Bandung",
      time: "20 min",
      img: "https://www.djelajah.com/wp-content/uploads/2020/06/Trans-Studio-Bandung.jpg",
      tag: "Amusement",
    },
    {
      name: "Punclut (Puncak Ciumbuleuit)",
      time: "20 min",
      img: "https://jagoantravel.com/admin/gambar/punclut-bandung-1(1).jpg",
      tag: "View & Eat",
    },
    {
      name: "Floating Market",
      time: "30 min",
      img: "https://www.1001malam.com/travel/wp-content/uploads/2018/09/Floating-Market-Lembang-1.jpg",
    },
    {
      name: "Farm House",
      time: "30 min",
      img: "http://rovers.id/image/FARMHOUSE%20LEMBANG%20BANDUNG/FARMHOUSE%20LEMBANG%20BANDUNG.jpg",
    },
    {
      name: "The Great Asia Afrika",
      time: "30 min",
      img: "https://bandungfoto.com/wp-content/uploads/2024/05/Harga-Tiket-Masuk-The-Great-Asia-Africa-Lembang-Bandung.webp",
    },
    {
      name: "Dago Pakar",
      time: "15 min",
      img: "https://thekarimun.com/wp-content/uploads/2022/09/Dago-Pakar-911x1024.jpeg",
    },
    {
      name: "Masjid Al Jabbar",
      time: "40 min",
      img: "https://assets.ladiestory.id/gallery/16726269861269950358-masjid-al-jabbar.jpg",
      tag: "Iconic",
    },
  ];

  const longTripSpots = [
    // Agak Jauh
    {
      name: "Kawah Putih",
      time: "1.5 Hours",
      img: "https://img.okezone.com/content/2020/10/26/408/2299441/danau-kawah-putih-wisata-alam-eksotis-nan-legendaris-di-bandung-VTi6AvxpFR.jpg",
      tag: "Nature",
    },
    {
      name: "Situ Patenggang",
      time: "1.5 Hours",
      img: "https://ik.imagekit.io/tvlk/blog/2018/08/Bandung-Situ-Patenggang-1126603460.jpg",
      tag: "Nature",
    },
  ];

  const DestinationCard = ({ item, type }) => (
    <div className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-56 w-full overflow-hidden relative bg-gray-50 flex items-center justify-center">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge Waktu */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm border border-gray-100">
          {type === "walk" ? (
            <Footprints size={14} className="text-blue-600" />
          ) : (
            <Car size={14} className="text-yellow-600" />
          )}
          {item.time}
        </div>

        {/* Tag (Optional) */}
        {item.tag && (
          <div className="absolute top-3 right-3 bg-blue-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
            {item.tag}
          </div>
        )}
      </div>

      {/* Konten Teks */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
          {item.name}
        </h3>
        <div className="flex items-center text-gray-500 text-sm gap-2">
          <Navigation size={16} />
          <span>from Cihampelas Hostel</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-0">
      {/* --- HERO HEADER --- */}
      <div className="bg-white pt-32 pb-10 md:pt-44 md:pb-16 px-6 text-center relative overflow-hidden">
        {/* Konten Teks */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
            Explore The City
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
            Nearby Attractions
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Strategically located near Bandung's best spots. Whether you prefer
            walking or a short drive, everything is within reach.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* 1. WALKING DISTANCE */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <Footprints size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Walking Distance
              </h2>
              <p className="text-gray-500">Just a few steps from your room</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {walkingSpots.map((item, idx) => (
              <DestinationCard key={idx} item={item} type="walk" />
            ))}
          </div>
        </section>

        {/* 2. SHORT DRIVE (<10 Min) */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
              <Car size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Quick Drive
              </h2>
              <p className="text-gray-500">
                Less than 10 minutes by car or bike
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortDriveSpots.map((item, idx) => (
              <DestinationCard key={idx} item={item} type="drive" />
            ))}
          </div>
        </section>

        {/* 3. EXPLORE BANDUNG (15-60 Min) */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-green-100 text-green-600 rounded-full">
              <MapPin size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Explore Bandung
              </h2>
              <p className="text-gray-500">Popular spots under 1 hour drive</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediumDriveSpots.map((item, idx) => (
              <DestinationCard key={idx} item={item} type="drive" />
            ))}
          </div>
        </section>

        {/* 4. DAY TRIP (Redesign: Kartu Besar & Dramatis) */}
        <section>
          <div className="bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Dekorasi Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            {/* Header Section */}
            <div className="relative z-10 mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                Nature & Adventure
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
                A bit further away (approx. 1.5 hours), but absolutely
                breathtaking. Worth the trip to experience Bandung's natural
                beauty.
              </p>
            </div>

            {/* Grid Cards Besar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {longTripSpots.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col"
                >
                  {/* Container Gambar Besar */}
                  {/* h-64 (mobile) sampai h-80 (desktop) agar gambar PUAS dilihat */}
                  <div className="w-full h-64 md:h-80 overflow-hidden relative bg-black/20">
                    <img
                      src={item.img}
                      alt={item.name}
                      // Menggunakan object-cover agar foto alam memenuhi seluruh kotak tanpa sisa (Imersif)
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Gradient Halus di dalam gambar */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Konten Text */}
                  <div className="p-6 md:p-8 grow flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors">
                      {item.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-blue-100">
                      {/* Badge Waktu */}
                      <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border border-white/10">
                        <Clock size={18} className="text-yellow-400" />
                        <span>{item.time} drive</span>
                      </div>

                      {/* Tag Recommended */}
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-200 opacity-80 border-l border-blue-400/50 pl-4">
                        Most Popular
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tour;
