import { useEffect, useRef } from "react";

const brands = [
  { name: "Brand A", logo: "/client/chitose.png" },
  { name: "Brand B", logo: "/client/hoipolloy.png" },
  { name: "Brand C", logo: "/client/saokiid.png" },
  { name: "Brand D", logo: "/client/kalea.png" },
  { name: "Brand E", logo: "/client/talabia.png" },
  { name: "Brand F", logo: "/client/keepfs.png" },
  { name: "Brand G", logo: "/client/preface.png" },
  { name: "Brand H", logo: "/client/ma.png" },
  { name: "Brand I", logo: "/client/3zbo.png" },
  { name: "Brand J", logo: "/client/f.png" },
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
  className="flex-shrink-0 flex items-center justify-center h-[80px] w-[160px]"
>
  <img
    src={brand.logo}
    alt={brand.name}
    className="max-h-[60px] w-auto object-contain"
  />
</div>

              ))}

          </div>

        </div>

      </div>

    </section>
    );
}