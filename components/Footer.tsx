import Link from "next/link";
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

  {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">

    {/* Instagram */}
              <a
                href="https://www.instagram.com/lestari.label/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#DC2626] transition"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm9.25 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>

    {/* YouTube */}
              <a
                href="https://www.youtube.com/@lestarilabel9268"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#DC2626] transition"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </a>

    {/* TikTok */}
              <a
               href="https://www.tiktok.com/@lestari.label" 
               target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#DC2626] transition"
             >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-1.88V15.27a5.36 5.36 0 1 1-4.644-5.314v2.86a2.5 2.5 0 1 0 1.784 2.454V2h2.86a7.654 7.654 0 0 0 4.77 2.89v1.796z"/>
              </svg>
            </a>

          </div>
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
                      0821-7405-3966
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
                    <li className="hover:text-white transition">
                      <Link 
                        href="/products/savepick" className="text-sm inline-flex items-center">
                        Save Pick
                      </Link>
                    </li>
                    <li className="hover:text-white transition">
                      <Link 
                        href="/products/damask" className="text-sm inline-flex items-center">
                        Damask Label
                      </Link>
                    </li>
                    <li className="hover:text-white transition">
                      <Link 
                        href="/products/hd" className="text-sm inline-flex items-center">
                        HD Woven Label
                      </Link>
                    </li>
                    <li className="hover:text-white transition">
                      <Link 
                        href="/products/double" className="text-sm inline-flex items-center">
                        Double Woven Label
                      </Link>
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