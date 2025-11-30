// src/data/RoomsData.js

// --- IMPORT GAMBAR ROOM 101 ---
import r101_main from '../assets/rooms/101.jpg';
import r101_2 from '../assets/rooms/101 (2).jpg';
import r101_3 from '../assets/rooms/101 (3).jpg';
import r101_4 from '../assets/rooms/101 (4).jpg';
import r101_5 from '../assets/rooms/101 (5).jpg';

// --- IMPORT GAMBAR ROOM 102 ---
import r102_main from '../assets/rooms/102.jpg';
import r102_2 from '../assets/rooms/102 (2).jpg';

// --- IMPORT GAMBAR ROOM 103 ---
import r103_main from '../assets/rooms/103.jpg';
import r103_2 from '../assets/rooms/103 (2).jpg';
import r103_3 from '../assets/rooms/103 (3).jpg';
import r103_4 from '../assets/rooms/103 (4).jpg';
import r103_5 from '../assets/rooms/103 (5).jpg';
import r103_6 from '../assets/rooms/103 (6).jpg';

// --- IMPORT GAMBAR ROOM 104 ---
import r104_main from '../assets/rooms/104.jpg';
import r104_2 from '../assets/rooms/104 (2).jpg';
import r104_3 from '../assets/rooms/104 (3).jpg';

// --- IMPORT GAMBAR ROOM 105 ---
import r105_main from '../assets/rooms/105.jpg';
import r105_2 from '../assets/rooms/105 (2).jpg';
import r105_3 from '../assets/rooms/105 (3).jpg';
import r105_4 from '../assets/rooms/105 (4).jpg';

// --- IMPORT GAMBAR ROOM 106 ---
import r106_main from '../assets/rooms/106.jpg';
import r106_2 from '../assets/rooms/106 (2).jpg';
import r106_3 from '../assets/rooms/106 (3).jpg';

export const roomsData = [
  {
    id: '101',
    roomSize: '3.5 x 4.0 meter',
    price: { daily: '190.000', weekly: '1.200.000', monthly: '1.900.000' },
    images: [r101_main, r101_2, r101_3, r101_4, r101_5],
    features: ['AC', 'WiFi', 'Hot Shower', 'TV Netflix', 'Private Bathroom']
  },
  {
    id: '102',
    roomSize: '3.5 x 5.0 meter',
    price: { daily: '200.000', weekly: '1.300.000', monthly: '2.000.000' },
    images: [r102_main, r102_2],
    features: ['AC', 'WiFi', 'Hot Shower', 'TV Netflix', 'Private Bathroom']
  },
  {
    id: '103',
    roomSize: '3.0 x 3.5 meter', 
    price: { daily: '160.000', weekly: '900.000', monthly: '1.500.000' },
    images: [r103_main, r103_2, r103_3, r103_4, r103_5, r103_6],
    features: ['AC', 'WiFi', 'Hot Shower', 'TV Netflix', 'Private Bathroom']
  },
  {
    id: '104',
    roomSize: '3.0 x 3.5 meter', 
    price: { daily: '170.000', weekly: '1.000.000', monthly: '1.700.000' },
    images: [r104_main, r104_2, r104_3],
    features: ['AC', 'WiFi', 'Hot Shower', 'TV Netflix', 'Private Bathroom']
  },
  {
    id: '105',
    roomSize: '3.0 x 3.5 meter', 
    price: { daily: '180.000', weekly: '1.100.000', monthly: '1.800.000' },
    images: [r105_main, r105_2, r105_3, r105_4],
    features: ['AC', 'WiFi', 'Hot Shower', 'TV Netflix', 'Private Bathroom']
  },
  {
    id: '106',
    roomSize: '3.0 x 3.5 meter', 
    price: { daily: '190.000', weekly: '1.200.000', monthly: '1.900.000' },
    images: [r106_main, r106_2, r106_3],
    features: ['AC', 'WiFi', 'Hot Shower', 'TV Netflix', 'Private Bathroom']
  },
];