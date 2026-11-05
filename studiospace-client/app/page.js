"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [studios, setStudios] = useState([]);

  // backend theke data anchi mama
  useEffect(() => {
    fetch('http://localhost:5000/api/featured-studios')
      .then(res => res.json())
      .then(data => setStudios(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {/* Banner section */}
      <div className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Perfect Creative Space</h1>
        <p className="text-lg md:text-xl mb-8">Book photography studios, podcast lounges, and music suites instantly.</p>
        <Link href="/studios" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg text-lg">
          Explore Studios
        </Link>
      </div>

      {/* Featured Studios */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Spaces</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studios.map(studio => (
            <div key={studio._id} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={studio.image || "https://i.ibb.co/placeholder.jpg"} alt="studio" className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">{studio.category}</span>
                <h3 className="text-xl font-semibold mt-2">{studio.title}</h3>
                <p className="text-gray-600">{studio.location}</p>
                <p className="text-lg font-bold mt-2">${studio.hourlyRate} / hr</p>
                <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}