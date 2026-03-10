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
                <Link
                  href="/products/HD"
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