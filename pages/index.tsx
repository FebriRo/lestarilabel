import Navbar     from "../components/Navbar"
import Beranda    from "../components/Beranda"
import Keunggulan from "../components/Keunggulan"
import Product    from "../components/Product"
import Layanan    from "../components/Layanan"
import Testimoni  from "../components/Testimoni"
import KenaliKualitas     from "../components/KenaliKualitas"
import TrustedClient      from "../components/TrustedClient"
import Contactus  from "../components/Contactus"
import Footer     from "../components/Footer"
import FloatingWA     from "../components/FloatingWA"
export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <Navbar />

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
  )
}