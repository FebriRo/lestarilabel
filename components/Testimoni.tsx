export default function Testimoni() {
  const testimonials = [
    {
      name: "Ibu Nabila",
      role: "Brand Owner",
      waChat: "/testimoni/nabila.png", // screenshot WA
    },
    {
      name: "Ibu Renata",
      role: "Fashion Brand",
      waChat: "/testimoni/renata.png", // screenshot WA
    },
    {
      name: "Bapak Ari",
      role: "Clothing Line",
      waChat: "/testimoni/ari.png", // screenshot WA
    },
  ];

  return (
    <section id="Testimoni" className="scroll-mt-20 bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-[#DC2626]">Customer</span> Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Banyak brand dan UMKM telah mempercayakan produksi label mereka kepada Lestari Label.
          </p>
        </div>

        {/* GRID TESTIMONI */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="p-4 border border-gray-200 rounded-xl hover:border-[#DC2626] transition duration-300 flex justify-center">
              <img
                src={item.waChat}
                alt={`Chat WA ${item.name}`}
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}