export default function Footer() {
  return (
    <footer id="Kontak"  className="relative bg-[#0b0b0b] text-gray-300 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-14">
          <div>
            <h3 className="text-white text-xl font-semibold">
              Lestari Label
            </h3>
            <div className="w-10 h-[2px] bg-[#DC2626] mt-3 mb-6"></div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Spesialis produksi woven label sejak tahun 2013,
              dengan standar kualitas tinggi untuk brand fashion,
              UMKM hingga produksi massal.
            </p>

          </div>
        {/* COLUMN 2 */}


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
                          Jl. Sadang No.164a, Margahayu Tengah, Kec. Margahayu, <br/>
                          Kabupaten Bandung, Jawa Barat 40225
                        </p>

                        <div className="flex gap-4 mt-2 text-xs">

                          <a
                            href="https://maps.google.com/?q=Lestari+Label+Jl+Sadang+No+164A+Margahayu+Bandung"
                            target="_blank"
                            className="text-[#DC2626] hover:underline"
                          >
                            View Maps
                          </a>

                          <button
                            onClick={() => navigator.clipboard.writeText("Jl. Sadang No.164a, Margahayu Tengah, Kec. Margahayu,Kabupaten Bandung, Jawa Barat 40225 ")}
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
                        +628-1571-74543
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
                        Save Pick
                      </li>
                      <li className="hover:text-white transition cursor-pointer">
                        HD Woven Label
                      </li>
                      <li className="hover:text-white transition cursor-pointer">
                        Double Woven Label
                      </li>
                    </ul>
                  </div>
                  
                </div>


                {/* Bottom */}
                <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm text-gray-500">
                  © {new Date().getFullYear()} Lestari Label. All rights reserved.
                </div>

              </div>

            </footer>

            )
}