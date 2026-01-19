'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/', label: '首頁' },
  { href: '/about', label: '關於' },
  { href: '/skills', label: '技能' },
  { href: '/projects', label: '作品' },
  { href: '/contact', label: '聯繫' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50">
      <nav className="glass border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="font-mono text-xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <span className="text-muted">&lt;</span>
                DEV
                <span className="text-muted">/&gt;</span>
              </Link>
            </motion.div>

            {/* Navigation Links */}
            <motion.ul
              className="flex items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {navItems.map((item, index) => {
                const isActive = pathname === item.href

                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`font-mono text-sm transition-colors relative group ${
                        isActive ? 'text-primary' : 'text-muted hover:text-primary'
                      }`}
                    >
                      <span
                        className={`text-primary transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        ~/
                      </span>
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-primary transition-all ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="font-mono text-sm px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-all rounded glow-primary"
              >
                $ 聯繫我
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  )
}
