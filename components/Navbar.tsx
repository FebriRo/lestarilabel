import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/#beranda">
            <img
              src="/logolestari.png"
              alt="Lestari Label"
              className="h-20 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">

          <Link href="/#beranda" className="hover:text-green-600 transition">
            Beranda
          </Link>

          <Link href="/#keunggulan" className="hover:text-green-600 transition">
            Keunggulan
          </Link>

          <Link href="/#Produk" className="hover:text-green-600 transition">
            Produk
          </Link>

          <Link href="/#Layanan" className="hover:text-green-600 transition">
            Layanan
          </Link>

          <Link href="/#Testimoni" className="hover:text-green-600 transition">
            Testimoni
          </Link>

          <Link href="/#Kontak" className="hover:text-green-600 transition">
            Kontak
          </Link>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-white border-t px-8 py-6 space-y-4 text-gray-700 font-medium">

          <Link
            href="/#beranda"
            className="block hover:text-green-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Beranda
          </Link>

          <Link
            href="/#keunggulan"
            className="block hover:text-green-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Keunggulan
          </Link>

          <Link
            href="/#Produk"
            className="block hover:text-green-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Produk
          </Link>

          <Link
            href="/#Layanan"
            className="block hover:text-green-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Layanan
          </Link>

          <Link
            href="/#Testimoni"
            className="block hover:text-green-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Testimoni
          </Link>

          <Link
            href="/#Kontak"
            className="block hover:text-green-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Kontak
          </Link>

        </div>

      )}

    </nav>
  )
}