import { useRouter } from "next/router"
import { useState, useEffect, useRef } from "react"
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
    title: "Save Pick",
    quote:
    "Save Pick label Tenunan standar dengan biaya lebih ekonomis.",
    description: [
      "Tenunan lebih sederhana dibanding Damask.",
      "Cocok untuk desain logo sederhana.",
      "Pilihan ekonomis untuk produksi jumlah besar."
    ],
    features: [
      "Ekonomis"
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

  const product = products[slug as keyof typeof products]

  const [selectedImage, setSelectedImage] = useState("")
  const [zoomImage, setZoomImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const touchStartX = useRef(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [slug])

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0])
      setCurrentIndex(0)
    }
  }, [product])

  if (!product) return null

  // swipe start
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  // swipe end
  const handleTouchEnd = (e: React.TouchEvent) => {

    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) < 50) return

    if (diff > 0) {
      const next = (currentIndex + 1) % product.images.length
      setCurrentIndex(next)
      setSelectedImage(product.images[next])
    } else {
      const prev =
        (currentIndex - 1 + product.images.length) %
        product.images.length
      setCurrentIndex(prev)
      setSelectedImage(product.images[prev])
    }
  }

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
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="rounded-xl w-full cursor-zoom-in transition duration-300"
              />
            )}

            {/* THUMBNAIL */}
            <div className="grid grid-cols-4 gap-3 mt-4">

              {product.images.map((img, index) => (

                <button
                  key={index}
                  onClick={() => {
                    setSelectedImage(img)
                    setCurrentIndex(index)
                  }}
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
                <p key={index}>
                  {text}
                </p>
              ))}

            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">

              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Fitur Utama
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">

                {product.features.map((feature, index) => (

                  <li key={index} className="flex items-center gap-3 text-gray-800">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-green-600 flex-shrink-0"
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
              className="flex w-fit items-center gap-2 bg-[#25D366] text-white px-4 py-2 text-sm font-medium rounded-lg shadow hover:scale-105 transition-all duration-200 mt-6"
            >

              {/* Icon WA */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-white"
              >
                <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.736 5.57 2.136 7.99L0 32l7.88-2.07a15.94 15.94 0 0 0 8.12 2.21c8.836 0 16-7.164 16-16S24.836.396 16 .396z"/>
              </svg>

              Pesan Sekarang

            </a>

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