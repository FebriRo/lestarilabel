export default function Contactus() {
  return (
    <section className="py-16 bg-[#DC2626] text-white">
      <div className="max-w-6xl mx-auto px-8 text-center">

       {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>

          {/* SUBTITLE */}
        <p className="text-lg text-red-100 max-w-2xl mx-auto mb-10">
          Kami siap membantu dari design hingga produksi.
        </p>

          {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
           href="https://wa.me/628157174543?text=Halo%2C%20saya%20tertarik%20membuat%20label%20untuk%20brand%20saya.%20Bisa%20konsultasi%3F"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-3 bg-white border-2 border-[#DC2626] text-[#DC2626] px-7 py-3.5 text-[15px] font-medium rounded-lg shadow-md hover:bg-[#DC2626] hover:text-white transition-all duration-200"
         >

            {/* Icon WA */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5"
            fill="currentColor"
          >
            <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.736 5.57 2.136 7.99L0 32l7.88-2.07a15.94 15.94 0 0 0 8.12 2.21c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.07a13.07 13.07 0 0 1-6.67-1.84l-.48-.28-4.68 1.23 1.25-4.56-.31-.47a13.02 13.02 0 1 1 10.89 5.92zm7.39-9.73c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.62-.2-.88.2-.26.4-1.01 1.29-1.24 1.55-.23.26-.46.3-.86.1-.4-.2-1.7-.63-3.23-2.02-1.19-1.06-2-2.38-2.23-2.78-.23-.4-.02-.61.17-.81.17-.17.4-.46.6-.69.2-.23.26-.4.4-.66.13-.26.07-.49-.03-.69-.1-.2-.88-2.13-1.2-2.91-.31-.75-.63-.65-.88-.66l-.75-.01c-.26 0-.69.1-1.05.49-.36.40-1.38 1.35-1.38 3.29s1.41 3.82 1.61 4.08c.2.26 2.78 4.25 6.74 5.96.94.41 1.67.66 2.24.85.94.3 1.8.26 2.48.16.76-.11 2.35-.96 2.68-1.88.33-.92.33-1.7.23-1.88-.1-.17-.36-.26-.76-.46z"/>
          </svg>

          Chat WhatsApp
        </a>

      </div>

    </div>
  </section>
  )
}