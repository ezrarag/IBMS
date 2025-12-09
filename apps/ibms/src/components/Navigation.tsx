"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Plus, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { getBrandColors } from '@shared/ui'

const brand = 'ibms'
const colors = getBrandColors(brand)

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <div className="relative w-auto h-12">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/readyaimgo-clients-temp.firebasestorage.app/o/IBMS%2Fcontent%2FIBMS.png?alt=media&token=9ff6b988-81f3-4317-b347-07637d72e49a"
                alt="IBMS Logo"
                width={200}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Middle: Menu Dropdown */}
          <div className="hidden md:flex md:items-center">
            <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <PopoverTrigger asChild>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors px-4 py-2 flex items-center gap-2 hover:opacity-80"
                  )}
                  style={{
                    color: isScrolled ? colors.primary : '#ffffff'
                  }}
                >
                  <motion.span
                    animate={{ rotate: isMenuOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg"
                  >
                    +
                  </motion.span>
                  <span className="flex">
                    {["M", "E", "N", "U"].map((letter, index) => (
                      <motion.span
                        key={`${letter}-${isMenuOpen}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: isMenuOpen ? index * 0.08 : 0,
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent 
                className="w-64 p-8 bg-white border border-gray-200/50 shadow-lg"
                align="center"
                sideOffset={8}
              >
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-base font-medium hover:opacity-80 transition-colors uppercase tracking-wide"
                        style={{ color: colors.primary }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 transition-colors hover:opacity-80"
              )}
              style={{
                color: isScrolled ? colors.primary : '#ffffff'
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Right: Text + Avatar + Plus Button */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Text on the left */}
            <div className="hidden lg:block">
              <p 
                className="text-[11px] tracking-tight uppercase leading-tight max-w-[180px]"
                style={{
                  color: isScrolled ? colors.primary : '#d1d5db'
                }}
              >
                SERVICE DISABLED VETERAN-OWNED<br />
                <span className="font-semibold text-white">CONSTRUCTION MANAGEMENT.</span>
              </p>
            </div>

            {/* Left Circle - Avatar */}
            <div className="relative">
              <a
                href="/contact"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-white shadow-md overflow-hidden relative block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/readyaimgo-clients-temp.firebasestorage.app/o/IBMS%2Fcontent%2F1652748425978%20-%20dwan%20williams.jpeg?alt=media&token=6ff006ef-dab6-40a0-9d2e-5031e928f2b6"
                  alt="Contact - Click to reach out"
                  fill
                  className="object-cover rounded-full"
                />
              </a>
            </div>

            {/* Right Circle - Plus Button with Login Dropdown */}
            <Popover open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <PopoverTrigger asChild>
                <button 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-white shadow-md flex items-center justify-center transition-all hover:opacity-90"
                  style={{ backgroundColor: colors.primary }}
                >
                  <Plus className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </button>
              </PopoverTrigger>
              <PopoverContent 
                className="w-64 p-4"
                align="end"
                sideOffset={8}
              >
                <div className="space-y-3">
                  <div className="pb-3 border-b border-gray-200">
                    <p className="text-sm font-semibold mb-1" style={{ color: colors.primary }}>Account</p>
                    <p className="text-xs text-gray-600">Sign in to access your account</p>
                  </div>
                  <div className="space-y-2">
                    <Link 
                      href="/admin/login"
                      onClick={() => setIsLoginOpen(false)}
                      className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-colors"
                      style={{ backgroundColor: colors.primary }}
                    >
                      Sign In
                    </Link>
                    <Link 
                      href="/contact"
                      onClick={() => setIsLoginOpen(false)}
                      className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
                      style={{ color: colors.primary }}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={cn(
          "md:hidden border-t",
          isScrolled 
            ? "border-gray-200/50 bg-white" 
            : "border-gray-700/50"
        )}
        style={{
          backgroundColor: isScrolled ? '#ffffff' : `${colors.primary}95`
        }}>
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium transition-colors py-2 hover:opacity-80"
                style={{
                  color: isScrolled ? colors.primary : '#ffffff'
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200/50">
              <Button 
                asChild 
                className="w-full text-white hover:opacity-90"
                style={{ backgroundColor: colors.primary }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="/admin/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}



