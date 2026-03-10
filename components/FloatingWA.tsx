export default function FloatingWA() {
  return (
    <a
      href="https://wa.me/628157174543?text=Halo%2C%20saya%20tertarik%20membuat%20label%20untuk%20brand%20saya.%20Bisa%20konsultasi%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 top-[65%] -translate-y-1/2 z-50 flex items-center gap-3"
    >

      {/* Text */}
      <div className="bg-white text-gray-800 text-sm px-4 py-2 rounded-full shadow-md font-medium">
        Consult Now
      </div>

      {/* WA Icon */}
      <div className="relative flex items-center justify-center w-14 h-14">

        {/* Ripple 1 */}
        <span className="absolute w-full h-full rounded-full bg-green-400 opacity-60 animate-ping"></span>

        {/* Ripple 2 */}
        <span className="absolute w-full h-full rounded-full bg-green-300 opacity-40 animate-ping delay-700"></span>

        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
          >
            <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.736 5.57 2.136 7.99L0 32l7.88-2.07a15.94 15.94 0 0 0 8.12 2.21c8.836 0 16-7.164 16-16S24.836.396 16 .396zm7.39 9.73c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.62-.2-.88.2-.26.4-1.01 1.29-1.24 1.55-.23.26-.46.3-.86.1-.4-.2-1.7-.63-3.23-2.02-1.19-1.06-2-2.38-2.23-2.78-.23-.4-.02-.61.17-.81.17-.17.4-.46.6-.69.2-.23.26-.4.4-.66.13-.26.07-.49-.03-.69-.1-.2-.88-2.13-1.2-2.91-.31-.75-.63-.65-.88-.66l-.75-.01c-.26 0-.69.1-1.05.49-.36.40-1.38 1.35-1.38 3.29s1.41 3.82 1.61 4.08c.2.26 2.78 4.25 6.74 5.96.94.41 1.67.66 2.24.85.94.3 1.8.26 2.48.16.76-.11 2.35-.96 2.68-1.88.33-.92.33-1.7.23-1.88-.1-.17-.36-.26-.76-.46z"/>
          </svg>

        </div>
      </div>
    </a>
    )
}