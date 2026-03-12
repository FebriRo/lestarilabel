export default function KenaliKualitas() {
  return (
    <section id="quality" className="section-padding bg-mina-light scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mina-dark mb-4">
            Kenali <span className="text-mina-green">Kualitas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Branding yang kuat dimulai dari detail kecil.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-5xl mx-auto mb-20 md:mb-24">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative overflow-hidden rounded-2xl mb-8 group">
              <img
                src="/kenalikami/taglandscape.png"
                alt="Perbandingan Detail Rajutan Label Woven"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Dari benang kecil hingga produk jadi, kami memastikan setiap elemen menunjukkan kualitas terbaik. Karena sebuah brand yang hebat selalu dimulai dari fondasi yang tepat.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}