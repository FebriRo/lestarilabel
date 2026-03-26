import Link from "next/link";

export default function Product() {
  return (
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
                Cocok untuk desain <b>sederhana</b> tanpa detail rumit.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626]">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/>
                    </svg>
                  </span>
                  <span>Solusi ekonomis dengan harga yang terjangkaun</span>
                </li>

              </ul>

              <div className="mt-auto pt-6 border-t">
                <Link
                  href="/products/savepick"
                  className="text-sm font-semibold text-[#DC2626] inline-flex items-center"
                >
                  Lihat Detail
                  <span className="ml-0 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </div>

            </div>
          </div>


          {/* Product 2 */}
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
                Pilihan ideal untuk <b>berbagai jenis desain</b> tanpa detail tulisan kecil.

              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626]">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/>
                    </svg>
                  </span>
                  <span>Harga terjangkau.</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626]">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/>
                    </svg>
                  </span>
                  <span>Banyak digunakan dalam industri fashion</span>
                </li>


              </ul>

              <div className="mt-auto pt-6 border-t">
                <Link
                  href="/products/damask"
                  className="text-sm font-semibold text-[#DC2626] inline-flex items-center"
                >
                  Lihat Detail
                  <span className="ml-0 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100">
                    →
                  </span>
                </Link>
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
                Direkomendasikan untuk desain dengan <b>detail tinggi</b> dan <b>tulisan kecil</b>.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">

                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626]">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/>
                    </svg>
                  </span>
                  <span>Kerapatan benang lebih tinggi dibanding Damask.</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626]">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/>
                    </svg>
                  </span>
                  <span>Hasil lebih tajam dan detail.</span>
                </li>

              </ul>

              <div className="mt-auto pt-6 border-t">
                <Link
                  href="/products/hd"
                  className="text-sm font-semibold text-[#DC2626] inline-flex items-center"
                >
                  Lihat Detail
                  <span className="ml-0 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100">
                    →
                  </span>
                </Link>
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
                Pilihan tepat untuk label dengan <b>ketebalan</b> dan <b>tekstur premium</b>.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">

                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626]">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/>
                    </svg>
                  </span>
                  <span>Permukaan lebih halus.</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626]">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/>
                    </svg>
                  </span>
                  <span>Ketebalan lebih tinggi.</span>
                </li>


              </ul>

              <div className="mt-auto pt-6 border-t">
                <Link
                  href="/products/double"
                  className="text-sm font-semibold text-[#DC2626] inline-flex items-center"
                >
                  Lihat Detail
                  <span className="ml-0 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    )
}