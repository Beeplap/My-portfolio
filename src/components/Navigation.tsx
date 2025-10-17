"use client"
import { useState, useRef, useLayoutEffect } from "react"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [positions, setPositions] = useState<{ left: number; width: number }[]>([])
  const navRef = useRef<HTMLDivElement>(null)

  const navItems = ["Home", "Experience", "Projects", "Skills", "Contact"]

  useLayoutEffect(() => {
    if (navRef.current) {
      const buttons = Array.from(navRef.current.querySelectorAll("a"))
      const rects = buttons.map((btn) => ({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
      }))
      setPositions(rects)
    }
  }, [])

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto">
      <div className="relative flex items-center gap-8 px-6 py-3 bg-black/30 border border-white/10 rounded-full backdrop-blur-xl shadow-lg overflow-hidden">
        
        <div className="flex items-center gap-4">
          <img
            src="./src/assets/beeplap.jpg" 
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border border-white/20"
          />
        </div>

        <div
          ref={navRef}
          className="hidden md:flex relative items-center gap-6"
          onMouseLeave={() => setHoverIndex(null)}
        >
          {hoverIndex !== null && positions[hoverIndex] && (
            <span
              className="absolute top-1/2 -translate-y-1/2 h-8 bg-white/90 rounded-full transition-all duration-300 ease-out shadow-md"
              style={{
                left: positions[hoverIndex].left - 6,
                width: positions[hoverIndex].width + 12,
              }}
            />
          )}

          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onMouseEnter={() => setHoverIndex(i)}
              className="relative z-10 px-4 py-1.5 text-sm font-medium text-white/90 hover:text-black transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation
