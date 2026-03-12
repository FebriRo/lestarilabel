// components/TrustedBrands.js
import { useEffect, useRef } from "react";

// Array logo klien
const brands = [
  { name: "Brand A", logo: "/client/ANCOL.png" },
  { name: "Brand B", logo: "/client/INFORMA.png" },
  { name: "Brand C", logo: "/client/KRISBOW.png" },
  { name: "Brand D", logo: "/client/NESCAFE.png" },
  { name: "Brand E", logo: "/client/SWISS BELL.png" },
  { name: "Brand F", logo: "/client/NESCAFE.png" },
];

export default function TrustedBrands({ speed = 0.2 }) {

  const scrollRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let raf;

    const step = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += speed;

        // infinite loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);

  }, [speed]);

  const displayBrands = [...brands, ...brands];

  return (
    <section className="bg-white py-12">

      <div className="container mx-auto">

        <h2 className="text-2xl font-bold text-center mb-8">
          Trusted by Top Brands
        </h2>

        {/* frame wrapper */}
        <div className="relative overflow-hidden">

          {/* frame kiri */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* frame kanan */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* slider */}
          <div
            ref={scrollRef}
            className="flex space-x-10 overflow-x-auto scrollbar-hide cursor-grab items-center"
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
            onTouchStart={() => (isPausedRef.current = true)}
            onTouchEnd={() => (isPausedRef.current = false)}
          >

            {displayBrands.map((brand, idx) => (

              <div key={idx} className="flex-shrink-0">

                <img
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={60}
                  className="object-contain"
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}