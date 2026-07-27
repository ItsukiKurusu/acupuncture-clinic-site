import Link from "next/link"

export function MatrixWaveFooter() {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-[#333]">
              Merelle
            </Link>
            <p className="text-xs text-gray-400 mt-2">Professional Beauty Salon</p>
          </div>

          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="#" className="hover:text-[#d4af37] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#d4af37] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#d4af37] transition-colors">
              Contact
            </Link>
          </div>

          <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Merelle. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
