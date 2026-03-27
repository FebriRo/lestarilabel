import { useEffect, useRef } from "react";

const brands = [
  { name: "Chitose", logo: "/client/chitose.png" },
  { name: "Hoi Polloy", logo: "/client/hoipolloy.png" },
  { name: "SAOKI", logo: "/client/saokiid.png" },
  { name: "Talabia", logo: "/client/talabia.png" },
  { name: "Kalea Attire", logo: "/client/kalea.png" },
  { name: "Keepfs.id", logo: "/client/keepfs.png" },
  { name: "Preface Warehouse", logo: "/client/preface.png" },
  { name: "Umnawear", logo: "/client/ma.png" },
  { name: "Bitsnbobs", logo: "/client/3zbo.png" },
  { name: "Fabeeya", logo: "/client/f.png" },
];

export default function TrustedBrands({ speed = 1 }) {

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {

    const container = scrollRef.current;
    if (!container) return;

    let raf: number;

    const step = () => {
      if (!isPausedRef.current) {

        container.scrollLeft += speed;

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

        <div className="relative overflow-hidden">

          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div
            ref={scrollRef}
            className="flex space-x-10 overflow-x-auto scrollbar-hide cursor-grab items-center"
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
            onTouchStart={() => (isPausedRef.current = true)}
            onTouchEnd={() => (isPausedRef.current = false)}
          >

            {displayBrands.map((brand, idx) => (

              <div
                key={idx}
                className="flex-shrink-0 flex flex-col items-center justify-center h-[100px] w-[160px]"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-[60px] w-auto object-contain mb-2"
                />
                <p className="text-sm text-gray-600 text-center">
                  {brand.name}
                </p>
              </div>

              ))}

          </div>

        </div>

      </div>

    </section>
    );
}