"use client"
import { useState, useRef, useLayoutEffect, useEffect } from "react"
import { Menu, X } from "lucide-react"


interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [positions, setPositions] = useState<{ left: number; width: number }[]>([])
  const navRef = useRef<HTMLDivElement>(null)

  // Smooth scroll behavior
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const id = item.href.replace('#', '')
        return document.getElementById(id)
      }).filter(Boolean) // Remove null sections

      if (sections.length === 0) return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      let activeIndex = 0

      // Find the section that's most visible in the viewport
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top
          const sectionBottom = rect.bottom

          // If the section is in the viewport (even partially)
          if (sectionTop <= windowHeight / 2 && sectionBottom >= windowHeight / 2) {
            activeIndex = i
            break
          }
          // If we've scrolled past the middle of the viewport and this section is above it
          if (sectionTop <= windowHeight / 2 && i === sections.length - 1) {
            activeIndex = i
          }
        }
      }

      setActiveIndex(activeIndex)
    }

    // Add throttling to improve performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  useLayoutEffect(() => {
    const measure = () => {
      if (!navRef.current) return
      const buttons = Array.from(navRef.current.querySelectorAll("a"))
      const rects = buttons.map((btn) => ({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
      }))
      setPositions(rects)
    }

    // Initial measure after next frame to ensure layout is stable
    const rafId = requestAnimationFrame(measure)

    // Re-measure after fonts load (first visit issue)
    const fontsReady: Promise<FontFaceSet> | undefined =
      typeof document !== "undefined" && "fonts" in document
        ? (document as Document & { fonts: FontFaceSet }).fonts.ready
        : undefined
    let fontsThenCleanup: (() => void) | null = null
    if (fontsReady && typeof fontsReady.then === "function") {
      void fontsReady.then(() => {
        requestAnimationFrame(measure)
      })
      fontsThenCleanup = () => {}
    }

    // Observe size changes of the nav container
    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined' && navRef.current) {
      resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(measure)
      })
      resizeObserver.observe(navRef.current)
    }

    // Window resize
    const onResize = () => requestAnimationFrame(measure)
    window.addEventListener('resize', onResize)

    const navElement = navRef.current

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      if (resizeObserver && navElement) resizeObserver.disconnect()
      if (fontsThenCleanup) fontsThenCleanup()
    }
  }, [activeIndex])

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto">
      <div className="relative flex items-center gap-8 px-8 py-4 bg-black/30 border-2 border-[#364153] rounded-full backdrop-blur-xl shadow-lg overflow-hidden">

        
        <div className="flex items-center gap-4">
          <img
            src="/assets/beep.jpg"
            alt="Beeplap Gharti Magar Profile"
            className="w-10 h-10 rounded-full object-cover border border-white/20 transition-all duration-300 hover:border-white/40 hover:scale-105"
          />
        </div>

        {/* Status display for mobile only */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <span className="text-white font-medium text-xs">Available</span>
        </div>

        <div
          ref={navRef}
          className="hidden md:flex relative items-center gap-6"
          onMouseLeave={() => setHoverIndex(null)}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Unified dynamic highlighter */}
          {(() => {
            // Determine which index to highlight (hover takes priority over active)
            const highlightIndex = hoverIndex !== null ? hoverIndex : activeIndex
            const isHovering = hoverIndex !== null
            
            return highlightIndex !== null && positions[highlightIndex] && (
              <span
                className={`absolute top-1/2 -translate-y-1/2 h-8 rounded-full transition-all duration-300 ease-out ${
                  isHovering 
                    ? 'bg-white/90 shadow-md ' 
                    : 'bg-white/20'
                }`}
                style={{
                  left: positions[highlightIndex].left - 6,
                  width: positions[highlightIndex].width + 12,
                }}
              />
            )
          })()}

          {navItems.map((item, i) => {
            const isActive = activeIndex === i
            const isHovered = hoverIndex === i
            const isHighlighted = hoverIndex !== null ? isHovered : isActive
            
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={() => setHoverIndex(i)}
                className={`relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                  isHovered 
                    ? 'text-black' 
                    : isActive 
                      ? 'text-white' 
                      : 'text-white/90 hover:text-black'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </a>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:ml-0 md:hidden text-white hover:text-white/80 transition-colors p-2 rounded-lg hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden origin-top transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 mt-3 max-h-[420px] pointer-events-auto"
            : "opacity-0 -translate-y-2 max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-lg">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeIndex === index
                  ? "text-white bg-white/20"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              aria-current={activeIndex === index ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
