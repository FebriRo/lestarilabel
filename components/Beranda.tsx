export default function Beranda() {
  return (
    <section id="beranda" className="pt-20 scroll-mt-28 bg-gradient-to-r from-[#5B0F1F] to-[#DC2626]">
      <div className="max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16 items-center">
        {/* Text kiri */}
        <div>
          <h1 className="text-[32px] md:text-[52px] leading-[1.1] font-semibold text-white">
            Custom Label Berkualitas
            <br />
            Untuk Brand Anda
          </h1>

          <p className="mt-6 text-[17px] text-white/80 leading-relaxed max-w-xl">
            Tingkatkan citra brand Anda dengan label woven, satin, dan hangtag berkualitas premium.
            Diproduksi dengan detail presisi untuk hasil yang rapi, kuat, dan berkelas.
          </p>

          <div className="mt-10 flex gap-5">

            {/* Tombol WhatsApp */}
            <a
              href="https://wa.me/628157174543?text=Halo%2C%20saya%20tertarik%20membuat%20label%20untuk%20brand%20saya.%20Bisa%20konsultasi%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 text-[15px] font-medium rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
            >

              {/* Icon WA */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-white"
              >
                <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.736 5.57 2.136 7.99L0 32l7.88-2.07a15.94 15.94 0 0 0 8.12 2.21c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.07a13.07 13.07 0 0 1-6.67-1.84l-.48-.28-4.68 1.23 1.25-4.56-.31-.47a13.02 13.02 0 1 1 10.89 5.92zm7.39-9.73c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.62-.2-.88.2-.26.4-1.01 1.29-1.24 1.55-.23.26-.46.3-.86.1-.4-.2-1.7-.63-3.23-2.02-1.19-1.06-2-2.38-2.23-2.78-.23-.4-.02-.61.17-.81.17-.17.4-.46.6-.69.2-.23.26-.4.4-.66.13-.26.07-.49-.03-.69-.1-.2-.88-2.13-1.2-2.91-.31-.75-.63-.65-.88-.66l-.75-.01c-.26 0-.69.1-1.05.49-.36.40-1.38 1.35-1.38 3.29s1.41 3.82 1.61 4.08c.2.26 2.78 4.25 6.74 5.96.94.41 1.67.66 2.24.85.94.3 1.8.26 2.48.16.76-.11 2.35-.96 2.68-1.88.33-.92.33-1.7.23-1.88-.1-.17-.36-.26-.76-.46z"/>
              </svg>

              Hubungi WhatsApp
            </a>

          </div>
        </div>

        {/* YouTube kanan */}
        <div className="flex justify-center">
          <div className="w-full max-w-[560px] aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <iframe
              src="https://www.youtube.com/embed/TT37qARwsQQ?modestbranding=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 md:h-96"
            ></iframe>
            </div>
          </div>

        </div>
      </section>
      )
}