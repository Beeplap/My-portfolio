"use client"
import { useState, useRef, useLayoutEffect, useEffect } from "react"
import { Menu, X } from "lucide-react"
import beeplapimg from "../assets/beeplap.jpg"

interface NavItem {
  name: string
  href: string
}

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [positions, setPositions] = useState<{ left: number; width: number }[]>([])
  const navRef = useRef<HTMLDivElement>(null)

  const navItems: NavItem[] = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ]

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

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const id = item.href.replace('#', '')
        return document.getElementById(id)
      }).filter(Boolean) // Remove null sections

      if (sections.length === 0) return

      const scrollPosition = window.scrollY + window.innerHeight / 2
      let activeIndex = 0

      // Check each section to find the one that's most visible
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionBottom = sectionTop + rect.height

          // If we're in the middle of a section or past it, this is our active section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeIndex = i
            break
          }
          // If we've scrolled past all sections, the last one should be active
          if (scrollPosition >= sectionBottom && i === sections.length - 1) {
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
            src={beeplapimg}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border border-white/20"
          />
        </div>

        <div
          ref={navRef}
          className="hidden md:flex relative items-center gap-6"
          onMouseLeave={() => setHoverIndex(null)}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Active indicator */}
          {activeIndex !== null && positions[activeIndex] && (
            <span
              className="absolute top-1/2 -translate-y-1/2 h-8 bg-white/20 rounded-full transition-all duration-300 ease-out"
              style={{
                left: positions[activeIndex].left - 6,
                width: positions[activeIndex].width + 12,
              }}
            />
          )}
          
          {/* Hover indicator */}
          {hoverIndex !== null && positions[hoverIndex] && hoverIndex !== activeIndex && (
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
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              onMouseEnter={() => setHoverIndex(i)}
              className={`relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                activeIndex === i 
                  ? 'text-white' 
                  : 'text-white/90 hover:text-black'
              }`}
              aria-current={activeIndex === i ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-white/80 transition-colors p-2 rounded-lg hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 mt-3' 
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <div className="bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-lg">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeIndex === index
                  ? 'text-white bg-white/20'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-current={activeIndex === index ? 'page' : undefined}
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
