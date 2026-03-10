import { useEffect, useState } from 'react'; //agar menu bar nya punya effect

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-poppins min-h-screen bg-gray-50 pt-[73px]">

     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

    {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logolestari.png"
            alt="Lestari Label"
            className="h-20 w-auto object-contain"
          />
        </div>

    {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#beranda" className="hover:text-green-600 transition"> Beranda </a>
          <a href="#keunggulan" className="hover:text-green-600 transition"> Keunggulan </a>
          <a href="#Produk" className="hover:text-green-600 transition"> Produk </a>
          <li className="hover:text-green-600 cursor-pointer">Layanan</li>
          <li className="hover:text-green-600 cursor-pointer">Tentang</li>
          <li className="hover:text-green-600 cursor-pointer">Testimoni</li>
          <li className="hover:text-green-600 cursor-pointer">Kontak</li>
        </ul>

    {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

  {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-8 py-6 space-y-4 text-gray-700 font-medium">
         <a href="#beranda" className="block hover:text-green-600 transition"> Beranda </a>
         <a href="#keunggulan" className="block hover:text-green-600 transition"> Keunggulan </a>
         <a href="#Produk" className="block hover:text-green-600 transition"> Produk </a>
         <div className="hover:text-green-600 cursor-pointer">Layanan</div>
         <div className="hover:text-green-600 cursor-pointer">Tentang</div>
         <div className="hover:text-green-600 cursor-pointer">Testimoni</div>
         <div className="hover:text-green-600 cursor-pointer">Kontak</div>
       </div>
       )}
    </nav>


    {/* Beranda */}
    <section id="beranda" className="scroll-mt-28 bg-gradient-to-r from-[#5B0F1F] to-[#DC2626]">
      <div className="max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16 items-center">

    {/* Text kiri */}
        <div>
          <h1 className="text-[32px] md:text-[52px] leading-[1.1] font-semibold text-white">
            Custom Label Berkualitas
            <br />
            Untuk Brand Anda
          </h1>

          <p className="mt-6 text-[17px] text-white/80 leading-relaxed max-w-xl">
            Tingkatkan citra brand Anda dengan label woven, satin, dan hangtag berkualitas premium. Diproduksi dengan detail presisi untuk hasil yang rapi, kuat, dan berkelas.
          </p>

          <div className="mt-10 flex gap-5">

        {/* Tombol WhatsApp */}
            <a
              href="https://wa.me/6281387688277"
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

      {/* YouTube Embed kanan */}
        <div className="flex justify-center">
          <div className="w-full max-w-[560px] aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <iframe
              src="https://www.youtube.com/embed/XOcz9zUrLm4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            </div>
          </div>

        </div>
      </section>
    {/* End Berang */}


      {/* Section 2 - Keunggulan */}
      <section id="keunggulan" className="scroll-mt-20 bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h2 className="text-[36px] font-semibold text-gray-900">
            Kenapa Pilih Lestari Label?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Produksi cepat, hasil tetap eksklusif. Kami menggabungkan kecepatan pengerjaan dengan kualitas premium untuk memastikan brand Anda tampil maksimal.
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
                Proses pengerjaan efisien dengan sistem produksi terstandarisasi.
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

      {/* Section 3 - Produk Kami */}
      <section id="Produk" className="bg-gray-50 py-24 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-8 text-center">
          {/* Judul */}
          <h2 className="text-[36px] font-semibold text-gray-900">
            Produk Kami
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Berbagai pilihan label custom dengan standar kualitas tinggi
            untuk mendukung identitas brand Anda.
          </p>
          {/* Grid */}
          <div className="mt-16 grid md:grid-cols-4 gap-10">
          {/* Product 1 */}
            <div className="group bg-white rounded-xl shadow-sm overflow-hidden 
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
              text-left flex flex-col">
              <div className="overflow-hidden">
                <img
                  src="/gridproduk/damask.png"
                  alt="Damask"
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 min-h-[260px]">
                <h3 className="text-lg font-semibold text-gray-900">
                  Damask
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Tenunan halus dengan detail logo yang tajam dan permukaan label yang lembut.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#DC2626]">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    Tulisan kecil tetap tajam
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#DC2626]">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    Best seller
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#DC2626]">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    Harga terjangkau
                  </li>
                </ul>

                <div className="mt-auto pt-6 border-t">
                  <span className="text-sm font-semibold text-[#DC2626] inline-flex items-center">
                    Lihat Detail
                    <span className="ml-0 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100">
                      →
                    </span>
                  </span>
                </div>

              </div>
            </div>


      {/* Product 2 */}
            <div className="group bg-white rounded-xl shadow-sm overflow-hidden 
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
              text-left flex flex-col">

              <div className="overflow-hidden">
                <img
                  src="/gridproduk/sp.png"
                  alt="Save Pick"
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 min-h-[260px]">

                <h3 className="text-lg font-semibold text-gray-900">
                  Save Pick
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Permukaan lembut dan elegan, cocok untuk brand fashion premium.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">

                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#DC2626]">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    Harga terjangkau
                  </li>

                </ul>

                <div className="mt-auto pt-6 border-t">
                  <span className="text-sm font-semibold text-[#DC2626] inline-flex items-center">
                    Lihat Detail
                    <span className="ml-0 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100">
                      →
                    </span>
                  </span>
                </div>

              </div>
            </div>


      {/* Product 3 */}
            <div className="group bg-white rounded-xl shadow-sm overflow-hidden 
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
              text-left flex flex-col">

              <div className="overflow-hidden">
                <img
                  src="/gridproduk/HD.png"
                  alt="HD"
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 min-h-[260px]">

                <h3 className="text-lg font-semibold text-gray-900">
                  HD
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Tenunan sangat rapat untuk menampilkan detail logo paling <b>tajam dan presisi</b>.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">

                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#DC2626]">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    Detail sangat tajam
                  </li>

                </ul>

                <div className="mt-auto pt-6 border-t">
                  <span className="text-sm font-semibold text-[#DC2626] inline-flex items-center">
                    Lihat Detail
                    <span className="ml-0 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100">
                      →
                    </span>
                  </span>
                </div>

              </div>
            </div>


      {/* Product 4 */}
            <div className="group bg-white rounded-xl shadow-sm overflow-hidden 
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
              text-left flex flex-col">

              <div className="overflow-hidden">
                <img
                  src="/gridproduk/Double.png"
                  alt="Double"
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 min-h-[260px]">

                <h3 className="text-lg font-semibold text-gray-900">
                  Double
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Tenunan ganda menghasilkan label lebih <b>tebal, kuat, dan tahan lama</b>.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">

                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#DC2626]">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    Design timbul dan dasar mengkilap
                  </li>

                </ul>

                <div className="mt-auto pt-6 border-t">
                  <span className="text-sm font-semibold text-[#DC2626] inline-flex items-center">
                    Lihat Detail
                    <span className="ml-0 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100">
                      →
                    </span>
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


     {/* Section 4 - Cara Order */}
      <section id="about" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
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
                href="https://wa.me/6281387688277?text=Halo%20Lestari%20Label%2C%20saya%20ingin%20konsultasi%20mengenai%20label"
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


{/* SECTION - TESTIMONI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">

    {/* TITLE */}
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

      {/* ITEM */}
            <div className="p-6 border border-gray-200 rounded-xl hover:border-[#DC2626] transition duration-300">
              <p className="text-gray-600 mb-6">
                "Kualitas labelnya sangat rapi dan detail. Prosesnya juga cepat,
                cocok untuk brand clothing kami."
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <div className="font-semibold text-gray-900">Andi Pratama</div>
                  <div className="text-sm text-gray-500">Brand Owner</div>
                </div>
              </div>
            </div>

      {/* ITEM */}
            <div className="p-6 border border-gray-200 rounded-xl hover:border-[#DC2626] transition duration-300">
              <p className="text-gray-600 mb-6">
                "Pelayanan admin sangat membantu dalam proses design.
                Produksi juga cepat dan hasilnya premium."
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <div className="font-semibold text-gray-900">Rina Sari</div>
                  <div className="text-sm text-gray-500">Fashion Brand</div>
                </div>
              </div>
            </div>

      {/* ITEM */}
            <div className="p-6 border border-gray-200 rounded-xl hover:border-[#DC2626] transition duration-300">
              <p className="text-gray-600 mb-6">
                "Sudah order beberapa kali dan hasilnya konsisten bagus.
                Recommended untuk produksi label clothing."
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <div className="font-semibold text-gray-900">Budi Santoso</div>
                  <div className="text-sm text-gray-500">Clothing Line</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>



{/* SECTION - READY TO GET STARTED */}
      <section className="py-16 bg-[#DC2626] text-white">
        <div className="max-w-6xl mx-auto px-8 text-center">

       {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>

          {/* SUBTITLE */}
          <p className="text-lg text-red-100 max-w-2xl mx-auto mb-10">
            Kami siap membantu dari design hingga produksi.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="https://wa.me/6281387688277?text=Halo%20Lestari%20Label%2C%20saya%20ingin%20konsultasi%20label"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white border-2 border-[#DC2626] text-[#DC2626] px-7 py-3.5 text-[15px] font-medium rounded-lg shadow-md hover:bg-[#DC2626] hover:text-white transition-all duration-200"
            >

            {/* Icon WA */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.736 5.57 2.136 7.99L0 32l7.88-2.07a15.94 15.94 0 0 0 8.12 2.21c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.07a13.07 13.07 0 0 1-6.67-1.84l-.48-.28-4.68 1.23 1.25-4.56-.31-.47a13.02 13.02 0 1 1 10.89 5.92zm7.39-9.73c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.62-.2-.88.2-.26.4-1.01 1.29-1.24 1.55-.23.26-.46.3-.86.1-.4-.2-1.7-.63-3.23-2.02-1.19-1.06-2-2.38-2.23-2.78-.23-.4-.02-.61.17-.81.17-.17.4-.46.6-.69.2-.23.26-.4.4-.66.13-.26.07-.49-.03-.69-.1-.2-.88-2.13-1.2-2.91-.31-.75-.63-.65-.88-.66l-.75-.01c-.26 0-.69.1-1.05.49-.36.40-1.38 1.35-1.38 3.29s1.41 3.82 1.61 4.08c.2.26 2.78 4.25 6.74 5.96.94.41 1.67.66 2.24.85.94.3 1.8.26 2.48.16.76-.11 2.35-.96 2.68-1.88.33-.92.33-1.7.23-1.88-.1-.17-.36-.26-.76-.46z"/>
              </svg>

              Chat WhatsApp
            </a>

          </div>

        </div>
      </section>





      <footer className="relative bg-[#0b0b0b] text-gray-300 pt-20 pb-10 overflow-hidden">

{/* Background radial */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8">

{/* GRID */}
          <div className="grid md:grid-cols-3 gap-14">

{/* COLUMN 1 */}
            <div>

              <h3 className="text-white text-xl font-semibold">
                Lestari Label
              </h3>

              <div className="w-10 h-[2px] bg-[#DC2626] mt-3 mb-6"></div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Spesialis produksi woven label, satin label dan hangtag
                dengan standar kualitas tinggi untuk brand fashion,
                UMKM hingga produksi massal.
              </p>

            </div>


{/* COLUMN 2 */}
            <div>

              <h4 className="text-white font-semibold">
                Produk
              </h4>

              <div className="w-10 h-[2px] bg-[#DC2626] mt-3 mb-6"></div>

              <ul className="space-y-3 text-sm text-gray-400">

                <li className="hover:text-white transition cursor-pointer">
                  Damask Label
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Satin Label
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  HD Woven Label
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Double Woven Label
                </li>

              </ul>

            </div>


{/* COLUMN 3 CONTACT */}
            <div>

              <h4 className="text-white font-semibold">
                Kontak
              </h4>

              <div className="w-10 h-[2px] bg-[#DC2626] mt-3 mb-6"></div>

              <div className="space-y-4">

{/* ADDRESS */}
                <div className="p-4 border border-gray-800 rounded-lg hover:border-[#DC2626] transition">

                  <div className="flex gap-3">

                    <svg className="w-5 h-5 text-[#DC2626] mt-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>

                        <div className="text-sm text-gray-400">

                          <p>
                            Jl. Cijagra No 31A<br/>
                            Katapang, Bandung
                          </p>

                          <div className="flex gap-4 mt-2 text-xs">

                            <a
                              href="https://maps.google.com/?q=Jl+Cijagra+No+31A+Katapang+Bandung"
                              target="_blank"
                              className="text-[#DC2626] hover:underline"
                            >
                              View Maps
                            </a>

                            <button
                              onClick={() => navigator.clipboard.writeText("Jl. Cijagra No 31A Katapang Bandung")}
                              className="text-[#DC2626] hover:underline"
                            >
                              Copy Address
                            </button>

                          </div>

                        </div>
                      </div>
                    </div>


{/* PHONE */}
                    <div className="flex gap-3 p-4 border border-gray-800 rounded-lg hover:border-[#DC2626] transition">

                      <svg className="w-5 h-5 text-[#DC2626]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.7 2.8a2 2 0 01-.45 1.89l-1.27 1.27a16 16 0 006.59 6.59l1.27-1.27a2 2 0 011.89-.45l2.8.7A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"/>
                        </svg>

                        <p className="text-sm text-gray-400">
                          +62 813 8768 8277
                        </p>

                      </div>


{/* EMAIL */}
                      <div className="flex gap-3 p-4 border border-gray-800 rounded-lg hover:border-[#DC2626] transition">

                        <svg className="w-5 h-5 text-[#DC2626]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M16 12H8m8 0l-8-5m8 5l-8 5"/>
                          </svg>

                          <p className="text-sm text-gray-400">
                            info@lestarilabel.com
                          </p>

                        </div>


{/* OPENING HOURS */}
                        <div className="flex gap-3 p-4 border border-gray-800 rounded-lg hover:border-[#DC2626] transition">

                          <svg className="w-5 h-5 text-[#DC2626]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="9"/>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/>
                          </svg>

                          <div className="text-sm text-gray-400">

                            <p className="text-gray-300 font-medium">
                              Opening Hours
                            </p>

                            <p>Senin - Jumat : 08.00 - 17.00</p>
                            <p>Sabtu : 08.00 - 15.00</p>

                          </div>

                        </div>

                      </div>
                    </div>

                  </div>


                {/* Bottom */}
                  <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Lestari Label. All rights reserved.
                  </div>

                </div>

              </footer>






{/* Floating WhatsApp */}
              <a
                href="https://wa.me/6281387688277?text=Halo%2C%20saya%20tertarik%20membuat%20label%20untuk%20brand%20saya.%20Bisa%20konsultasi%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-6 top-[65%] -translate-y-1/2 right-6 z-50 flex items-center gap-3"
              >

  {/* Text */}
                <div className="bg-white text-gray-800 text-sm px-4 py-2 rounded-full shadow-md font-medium">
                  Consult Now
                </div>

  {/* WA Icon */}
                <div className="relative flex items-center justify-center w-14 h-14">

    {/* Ripple 1 */}
                  <span className="absolute w-full h-full rounded-full bg-green-400 opacity-60 animate-ping"></span>

    {/* Ripple 2 */}
                  <span className="absolute w-full h-full rounded-full bg-green-300 opacity-40 animate-ping delay-700"></span>

    {/* Button */}
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition">

      {/* WhatsApp Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-7 h-7 fill-white"
                    >
                      <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.736 5.57 2.136 7.99L0 32l7.88-2.07a15.94 15.94 0 0 0 8.12 2.21c8.836 0 16-7.164 16-16S24.836.396 16 .396zm7.39 9.73c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.62-.2-.88.2-.26.4-1.01 1.29-1.24 1.55-.23.26-.46.3-.86.1-.4-.2-1.7-.63-3.23-2.02-1.19-1.06-2-2.38-2.23-2.78-.23-.4-.02-.61.17-.81.17-.17.4-.46.6-.69.2-.23.26-.4.4-.66.13-.26.07-.49-.03-.69-.1-.2-.88-2.13-1.2-2.91-.31-.75-.63-.65-.88-.66l-.75-.01c-.26 0-.69.1-1.05.49-.36.40-1.38 1.35-1.38 3.29s1.41 3.82 1.61 4.08c.2.26 2.78 4.25 6.74 5.96.94.41 1.67.66 2.24.85.94.3 1.8.26 2.48.16.76-.11 2.35-.96 2.68-1.88.33-.92.33-1.7.23-1.88-.1-.17-.36-.26-.76-.46z"/>
                    </svg>

                  </div>
                </div>

              </a>




            </div>
            );
}