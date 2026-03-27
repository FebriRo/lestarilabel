import Head from "next/head";

import Navbar     from "../components/Navbar"
import Beranda    from "../components/Beranda"
import Keunggulan from "../components/Keunggulan"
import Product    from "../components/Product"
import Layanan    from "../components/Layanan"
import Testimoni  from "../components/Testimoni"
import KenaliKualitas from "../components/KenaliKualitas"
import TrustedClient from "../components/TrustedClient"
import Contactus  from "../components/Contactus"
import Footer     from "../components/Footer"
import FloatingWA from "../components/FloatingWA"

export default function Products() {
  return (
    <>
      <Head>
        <title>Lestari Label Bandung | Label Baju 1-2 Hari Jadi</title>

        <meta
          name="description"
          content="Lestari Label Bandung melayani pembuatan label baju berkualitas dengan proses cepat 1-2 hari. Cocok untuk brand clothing, UMKM, dan konveksi."
        />

        <meta
          name="keywords"
          content="label baju bandung, lestari label, label baju cepat, label clothing bandung"
        />

        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gray-50">

        <Navbar />

        {/* H1 penting untuk SEO */}
        <h1 className="hidden">
          Lestari Label Bandung - Jasa Label Baju 1-2 Hari Jadi
        </h1>

        <Beranda />
        <Keunggulan />
        <Product />
        <Layanan />
        <Testimoni />
        <KenaliKualitas />
        <TrustedClient />
        <Contactus />
        <Footer />
        <FloatingWA />

      </div>
    </>
  )
}