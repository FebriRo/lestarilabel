export default function Keunggulan() {
  return (
    <section id="keunggulan" className="scroll-mt-20 bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">

        <h2 className="text-[36px] font-semibold text-gray-900">
          Kenapa Pilih Lestari Label?
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Produksi cepat <b>1-2 Hari</b>, hasil tetap eksklusif. Kami menggabungkan kecepatan pengerjaan dengan kualitas premium untuk memastikan brand Anda tampil maksimal.
        </p>

        <div className="mt-16 grid md:grid-cols-4 gap-10">

            {/* Item 1 */}
          <div>
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-[#5B0F1F] to-[#DC2626] flex items-center justify-center text-white text-xl">
              ✓
            </div>
            <h3 className="mt-6 font-semibold text-lg text-gray-900">
              Kualitas Premium
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Menggunakan bahan terbaik untuk hasil label yang tahan lama dan eksklusif.
            </p>
          </div>

            {/* Item 2 */}
          <div>
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-[#5B0F1F] to-[#DC2626] flex items-center justify-center text-white text-xl">
              ⚡
            </div>
            <h3 className="mt-6 font-semibold text-lg text-gray-900">
              Produksi Cepat
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Proses pengerjaan <b>1-2 Hari</b>, efisien dengan sistem produksi terstandarisasi.
            </p>
          </div>

            {/* Item 3 */}
          <div>
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-[#5B0F1F] to-[#DC2626] flex items-center justify-center text-white text-xl">
              🎯
            </div>
            <h3 className="mt-6 font-semibold text-lg text-gray-900">
              Custom Design
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Bisa menyesuaikan desain sesuai kebutuhan brand Anda.
            </p>
          </div>

            {/* Item 4 */}
          <div>
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-[#5B0F1F] to-[#DC2626] flex items-center justify-center text-white text-xl">
              🤝
            </div>
            <h3 className="mt-6 font-semibold text-lg text-gray-900">
              Support Ramah
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Tim kami siap membantu konsultasi hingga proses produksi selesai.
            </p>
          </div>

        </div>
      </div>
    </section>
    )
}