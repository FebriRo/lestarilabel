export default function Layanan() {
  return (
    <section id="Layanan" className="py-20 scroll-mt-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bagaiamana <span className="text-[#DC2626]">Cara Order?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Berikut ini tahapan order Lestari label.
            </p>

              {/* LIST KEUNGGULAN */}
            <div className="space-y-4">
              <div className="space-y-4">

                  {/* Item 1 */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-xl">
                    💬
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Whatsapp atau Instagram
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Hubungi admin Lestari Label melalui <b>WhatsApp atau DM Instagram</b> untuk konsultasi harga dan design.
                    </p>
                  </div>
                </div>

                  {/* Item 2 */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-xl">
                    🎨
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Design Layout
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Customer akan menerima <b>layout design</b>. Jika diperlukan, kami juga dapat membuat <b>sample</b> sebelum produksi.
                    </p>
                  </div>
                </div>

                  {/* Item 3 */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-xl">
                    ⚙️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Produksi
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Setelah layout dan sample <b>disetujui</b>, lakukan pembayaran <b>DP 50%</b>. Produksi dimulai dengan estimasi <b>1-2 hari kerja</b>.
                    </p>
                  </div>
                </div>

                  {/* Item 4 */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-xl">
                    📦
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Finish & Pengiriman
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Setelah melalui proses <b>QC dan finishing</b>, pesanan akan diberitahukan kepada customer untuk <b>pelunasan dan pengiriman / pengambilan</b>.
                    </p>
                  </div>
                </div>
              </div>
            </div>


              {/* BUTTON WA */}
            <a
             href="https://wa.me/6282174053966?text=Halo%2C%20saya%20tertarik%20membuat%20label%20untuk%20brand%20saya.%20Bisa%20konsultasi%3F"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 mt-8 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
           >
            Contact WhatsApp
          </a>

        </div>


      {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/section4.png"
              alt="Produksi Label"
              className="w-full h-full object-cover"
            />
          </div>


        {/* FLOATING BADGE 1 */}
          <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3">
            <div className="text-[#DC2626] font-bold text-lg">10+</div>
            <div className="text-xs text-gray-600">Years</div>
          </div>


        {/* FLOATING BADGE 2 */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3">
            <div className="text-[#DC2626] font-bold text-lg">500+</div>
            <div className="text-xs text-gray-600">Clients</div>
          </div>

        </div>

      </div>
    </div>
  </section>
  )
}