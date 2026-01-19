'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { submitContactForm } from '@/actions/contact'
import { ContactFormState } from '@/lib/types'
import { Footer } from '@/components/Footer'

const initialState: ContactFormState = {
  success: false,
  error: null,
  message: null,
}

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@example.dev',
    href: 'mailto:hello@example.dev',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: '地點',
    value: '台灣 台北',
    href: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: '回覆時間',
    value: '24 小時內',
    href: null,
  },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/johndoe',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/johndoe',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/johndoe',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [state, setState] = useState<ContactFormState>(initialState)
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    const result = await submitContactForm(state, formData)
    setState(result)
    setIsPending(false)

    if (result.success && formRef.current) {
      formRef.current.reset()
    }
  }

  return (
    <>
      <section className="min-h-dvh pt-24 pb-32 md:pb-20 relative" ref={ref}>
        {/* Decorative Elements */}
        <div className="absolute top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-10 w-4 h-4 bg-primary/30 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-60 right-20 w-3 h-3 bg-secondary/30 rounded-full"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-60 left-32 w-2 h-2 bg-primary/30 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Page Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-mono text-primary text-sm mb-4">
              <span className="text-muted">04.</span> contact
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              聯繫<span className="text-gradient">我</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              目前開放新的工作機會。無論是專案合作、問題諮詢，或只是想打個招呼，都歡迎聯繫！
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Methods */}
              <div className="terminal-border p-6">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 font-mono text-xs text-muted">contact.json</span>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.label}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center terminal-border text-primary">
                        {method.icon}
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted">{method.label}</div>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="font-mono text-sm text-white hover:text-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <div className="font-mono text-sm text-white">{method.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="terminal-border p-6">
                <h3 className="font-mono text-white mb-4">
                  <span className="text-primary">&gt;</span> 社群連結
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center terminal-border text-muted hover:text-primary hover:glow-primary transition-all"
                      aria-label={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                className="terminal-border p-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-50" />
                  </div>
                  <span className="font-mono text-sm text-white">目前狀態：</span>
                  <span className="font-mono text-sm text-primary">開放工作機會</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form ref={formRef} action={handleSubmit} className="terminal-border p-6">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 font-mono text-xs text-muted">send_message.sh</span>
                </div>

                {/* Honeypot field */}
                <input
                  type="text"
                  name="_honey"
                  autoComplete="off"
                  tabIndex={-1}
                  className="absolute opacity-0 pointer-events-none h-0 w-0"
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block font-mono text-sm text-muted mb-2">
                      <span className="text-primary">$</span> 姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      minLength={2}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded px-4 py-3 font-mono text-sm text-white placeholder-muted/50 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="請輸入您的姓名"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block font-mono text-sm text-muted mb-2">
                      <span className="text-primary">$</span> 電子郵件
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-slate-800/50 border border-slate-700 rounded px-4 py-3 font-mono text-sm text-white placeholder-muted/50 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block font-mono text-sm text-muted mb-2">
                      <span className="text-primary">$</span> 主旨
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      minLength={5}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded px-4 py-3 font-mono text-sm text-white placeholder-muted/50 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="專案合作 / 工作機會 / 其他"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block font-mono text-sm text-muted mb-2">
                      <span className="text-primary">$</span> 訊息內容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      rows={5}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded px-4 py-3 font-mono text-sm text-white placeholder-muted/50 focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="請描述您的需求或想法..."
                    />
                  </div>

                  {/* Status Messages */}
                  {state.error && (
                    <motion.div
                      className="font-mono text-sm text-red-400 p-3 bg-red-400/10 rounded border border-red-400/20"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="text-red-400">錯誤：</span> {state.error}
                    </motion.div>
                  )}
                  {state.success && state.message && (
                    <motion.div
                      className="font-mono text-sm text-primary p-3 bg-primary/10 rounded border border-primary/20"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="text-primary">成功：</span> {state.message}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isPending}
                    className="w-full font-mono text-sm px-6 py-3 bg-primary text-background font-semibold rounded hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed glow-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isPending ? '$ 傳送中...' : '$ 送出訊息'}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
