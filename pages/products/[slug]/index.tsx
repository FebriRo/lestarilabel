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

            {/* QUOTE */}
          <p className="text-lg text-gray-600 leading-relaxed mb-6 border-l-4 border-green-600 pl-4 italic mt-6">
            "{product.quote}"
          </p>

            {/* DESCRIPTION */}
          <div className="space-y-4 text-gray-600 mb-8">

            {product.description.map((text, index) => (
              <p key={index}>
                {text}
              </p>
              ))}

          </div>

            {/* FITUR UTAMA */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">

            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Fitur Utama
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">

              {product.features.map((feature, index) => (

                <li key={index} className="flex items-center gap-3 text-gray-800 group">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>

                  <span className="font-medium">
                    {feature}
                  </span>

                </li>

                ))}

            </ul>

          </div>

          <a
            href="https://wa.me/628157174543?text=Halo%2C%20saya%20tertarik%20membuat%20label%20untuk%20brand%20saya.%20Bisa%20konsultasi%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 bg-[#25D366] text-white px-4 py-2 text-sm font-medium rounded-lg shadow hover:scale-105 transition-all duration-200"
          >

              {/* Icon WA */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-white"
            >
              <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.736 5.57 2.136 7.99L0 32l7.88-2.07a15.94 15.94 0 0 0 8.12 2.21c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.07a13.07 13.07 0 0 1-6.67-1.84l-.48-.28-4.68 1.23 1.25-4.56-.31-.47a13.02 13.02 0 1 1 10.89 5.92zm7.39-9.73c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.62-.2-.88.2-.26.4-1.01 1.29-1.24 1.55-.23.26-.46.3-.86.1-.4-.2-1.7-.63-3.23-2.02-1.19-1.06-2-2.38-2.23-2.78-.23-.4-.02-.61.17-.81.17-.17.4-.46.6-.69.2-.23.26-.4.4-.66.13-.26.07-.49-.03-.69-.1-.2-.88-2.13-1.2-2.91-.31-.75-.63-.65-.88-.66l-.75-.01c-.26 0-.69.1-1.05.49-.36.40-1.38 1.35-1.38 3.29s1.41 3.82 1.61 4.08c.2.26 2.78 4.25 6.74 5.96.94.41 1.67.66 2.24.85.94.3 1.8.26 2.48.16.76-.11 2.35-.96 2.68-1.88.33-.92.33-1.7.23-1.88-.1-.17-.36-.26-.76-.46z"/>
            </svg>

            Pesan Sekarang
          </a>

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