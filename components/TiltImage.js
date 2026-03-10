// components/TiltImage.js
import { useState } from 'react';

export default function TiltImage({ src, alt }) {
  const [style, setStyle] = useState({ transform: 'rotateX(0deg) rotateY(0deg)' });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // posisi X mouse di dalam elemen
    const y = e.clientY - rect.top;  // posisi Y mouse di dalam elemen
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // maks ±10 derajat
    const rotateY = ((x - centerX) / centerX) * 10;

    setStyle({ transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)` });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)', transition: 'transform 0.3s ease' });
  };

  return (
    <div
      className="w-full h-52 overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-100"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-150"
        style={style}
      />
    </div>
  );
}