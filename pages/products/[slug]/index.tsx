import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"

import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import FloatingWA from "../../../components/FloatingWA"

const products = {
  damask: {
    title: "Damask Label",
    quote:
      "Damask label Tenunan lebih rapat dengan benang lebih halus.",
    description: [
      "Tenunan lebih rapat dibanding Save Pick.",
      "Detail tulisan lebih jelas.",
      "Banyak dipakai brand fashion."
    ],
    features: [
      "Rapat",
      "Detail cukup tajam",
      "Halus",
      "Bagus"
    ],
    images: [
      "/damask/1.jpg",
      "/damask/2.jpg",
      "/damask/3.jpg",
      "/damask/4.jpg",
      "/damask/5.jpg",
      "/damask/6.jpg",
    ],
  },

  savepick: {
    title: "HD Label",
    quote:
      "HD woven label memiliki kepadatan benang sangat tinggi sehingga detail kecil tetap terlihat tajam.",
    description: [
      "HD woven label memiliki kepadatan tenun yang sangat tinggi.",
      "Memungkinkan logo kecil tetap terlihat tajam.",
      "Biasanya digunakan untuk brand premium."
    ],
    features: [
      "Detail sangat tajam",
      "Tenunan sangat rapat",
      "Cocok untuk logo kecil",
      "Tahan lama",
      "Premium quality"
    ],
    images: [
      "/gridproduk/HD.png",
      "/gridproduk/HD2.png",
      "/gridproduk/HD3.png",
    ],
  },

  hd: {
    title: "HD Label",
    quote:
      "HD woven label memiliki kepadatan benang sangat tinggi sehingga detail kecil tetap terlihat tajam.",
    description: [
      "HD woven label memiliki kepadatan tenun yang sangat tinggi.",
      "Memungkinkan logo kecil tetap terlihat tajam.",
      "Biasanya digunakan untuk brand premium."
    ],
    features: [
      "Detail sangat tajam",
      "Tenunan sangat rapat",
      "Cocok untuk logo kecil",
      "Tahan lama",
      "Premium quality"
    ],
    images: [
      "/gridproduk/HD.png",
      "/gridproduk/HD2.png",
      "/gridproduk/HD3.png",
    ],
  },

  double: {
    title: "Double Label",
    quote:
      "Double woven label memiliki dua lapisan tenun sehingga lebih tebal dan memberikan kesan premium.",
    description: [
      "Double woven memiliki dua lapisan tenun.",
      "Membuat label lebih tebal dan kuat.",
      "Memberikan efek timbul yang lebih mewah."
    ],
    features: [
      "Tenunan dua lapis",
      "Lebih tebal dan kuat",
      "Design lebih premium",
      "Tahan lama",
      "Cocok untuk brand fashion"
    ],
    images: [
      "/gridproduk/Double.png",
      "/gridproduk/Double2.png",
    ],
  },
}

export default function ProductDetail() {

  const router = useRouter()
  const { slug } = router.query

  if (!router.isReady) return null

  const product = products[slug as keyof typeof products]

  const [selectedImage, setSelectedImage] = useState("")
  const [zoomImage, setZoomImage] = useState<string | null>(null)

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0])
    }
  }, [product])

  if (!product) return null

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="pt-32">

        {/* BREADCRUMB */}
        <div className="max-w-6xl mx-auto px-8 text-sm text-gray-500">

          <Link href="/#beranda" className="hover:text-gray-900">
            Beranda
          </Link>

          <span className="mx-2">/</span>

          <Link href="/#Produk" className="hover:text-gray-900">
            Produk
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-900 font-medium">
            {product.title}
          </span>

        </div>

        <section className="max-w-6xl mx-auto px-8 py-12 grid md:grid-cols-2 gap-12">

          {/* LEFT IMAGE */}
          <div>

            {selectedImage && (
              <img
                src={selectedImage}
                onClick={() => setZoomImage(selectedImage)}
                className="rounded-xl w-full cursor-zoom-in"
              />
            )}

            <div className="grid grid-cols-4 gap-3 mt-4">

              {product.images.map((img, index) => (

                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition
                  ${selectedImage === img
                      ? "border-red-600"
                      : "border-transparent hover:border-gray-300"
                    }`}
                >

                  <img
                    src={img}
                    className="object-cover w-full h-full"
                  />

                </button>

              ))}

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h1 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 border-l-4 border-green-600 pl-4 italic mt-6">
              "{product.quote}"
            </p>

            <div className="space-y-4 text-gray-600 mb-8">

              {product.description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">

              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Fitur Utama
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">

                {product.features.map((feature, index) => (

                  <li key={index} className="flex items-center gap-3 text-gray-800">

                    <span className="font-medium">
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </section>

        {/* OTHER PRODUCTS */}
        <section className="max-w-6xl mx-auto px-8 pb-20">

          <h2 className="text-2xl font-semibold mb-8">
            Produk Lainnya
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {Object.entries(products).map(([key, item]) => (

              <Link
                key={key}
                href={`/products/${key}`}
                scroll={true}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >

                <img
                  src={item.images[0]}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <span className="text-sm text-red-600 font-semibold">
                    Lihat Detail →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </section>

      </div>

      {/* ZOOM MODAL */}
      {zoomImage && (

        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >

          <img
            src={zoomImage}
            className="max-h-[90%] max-w-[90%] rounded-xl"
          />

        </div>

      )}

      <Footer />
      <FloatingWA />

    </div>
  )
}