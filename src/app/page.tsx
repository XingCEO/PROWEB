'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Footer } from '@/components/Footer'
import {
  NeuralIcon,
  DatabaseIcon,
  GlobeIcon,
  AppleIcon,
  LinkIcon,
  BookIcon,
  ReactIcon,
  TypeScriptIcon,
  PostgresIcon,
  IconBackground,
} from '@/components/Icons'

const services = [
  {
    icon: NeuralIcon,
    gradient: 'from-violet-500/20 to-purple-500/20',
    title: 'AI 系統架構',
    description: 'LLM 應用開發、MCP Protocol 設計、RAG 系統建構與智能代理架構。',
    tags: ['LLM', 'MCP', 'RAG'],
  },
  {
    icon: DatabaseIcon,
    gradient: 'from-emerald-500/20 to-green-500/20',
    title: '分散式系統',
    description: '高可用資料庫架構、微服務設計，確保系統穩定性與可擴展性。',
    tags: ['PostgreSQL', 'Redis', 'Cassandra'],
  },
  {
    icon: GlobeIcon,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    title: '全端開發',
    description: '使用 React、Next.js、TypeScript 打造現代化網頁應用程式。',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: AppleIcon,
    gradient: 'from-pink-500/20 to-rose-500/20',
    title: 'Apple 生態系',
    description: 'Swift 原生應用開發，Apple Silicon 優化與 macOS/iOS 整合。',
    tags: ['Swift', 'Xcode', 'Apple Silicon'],
  },
]

const featuredProjects = [
  {
    id: 'neural-dashboard',
    title: '智能數據儀表板',
    description: '即時分析儀表板，運用機器學習提供預測性洞察。',
    tags: ['React', 'Python', 'TensorFlow'],
  },
  {
    id: 'cryptoflow',
    title: 'CryptoFlow',
    description: '去中心化金融平台，實現無縫跨鏈代幣交換。',
    tags: ['Solidity', 'Web3.js', 'React'],
  },
  {
    id: 'devops-automation',
    title: 'DevOps 自動化套件',
    description: '一站式 DevOps 平台，自動化 CI/CD 流程與基礎設施管理。',
    tags: ['Go', 'Kubernetes', 'Docker'],
  },
]

const techHighlights = [
  { name: 'LLM', icon: NeuralIcon },
  { name: 'MCP Protocol', icon: LinkIcon },
  { name: 'RAG', icon: BookIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'PostgreSQL', icon: PostgresIcon },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const IconComponent = service.icon
  return (
    <motion.div
      className="terminal-border p-6 hover:glow-primary transition-all group relative overflow-hidden"
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        <motion.div
          className="mb-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
        >
          <IconBackground gradient={service.gradient}>
            <IconComponent size={28} className="text-primary" />
          </IconBackground>
        </motion.div>
        <h3 className="font-mono text-lg text-white mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted text-sm mb-4 leading-relaxed">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 bg-slate-800/50 text-primary/80 rounded border border-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function FeaturedProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  return (
    <motion.div
      className="terminal-border overflow-hidden group"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-slate-900/50">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-muted">~/projects/{project.id}</span>
      </div>

      {/* Image Placeholder */}
      <div className="relative h-40 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-4 right-4 w-16 h-16 border border-primary/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-12 h-12 border border-secondary/20 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <span className="font-mono text-3xl text-primary/30">&lt;/&gt;</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="font-mono text-white font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs px-2 py-1 bg-slate-800 text-primary rounded border border-primary/10">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="font-mono text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
        >
          $ view --details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)
  const isServicesInView = useInView(servicesRef, { once: true, margin: '-100px' })
  const isProjectsInView = useInView(projectsRef, { once: true, margin: '-100px' })

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-dvh flex items-center justify-center relative overflow-hidden pt-16 md:pt-0"
      >
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-primary/10 rounded-xl"
          animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-16 h-16 border border-secondary/10 rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-40 right-32 w-12 h-12 border border-primary/10 rounded-lg rotate-45"
          animate={{ y: [0, 15, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Terminal-style intro */}
            <motion.div
              className="terminal-border p-4 mb-8 font-mono text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-muted">visitor@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-secondary">~</span>
              <span className="text-white">$ </span>
              <span className="text-primary">whoami</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-white">你好，我是</span>
              <br className="md:hidden" />
              <span className="text-gradient"> AI 架構師</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className="font-mono text-lg md:text-xl text-muted mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-primary">&gt; </span>
              Senior AI & Full-Stack Systems Architect
              <span className="inline-block w-2 h-5 bg-primary ml-1 cursor-blink" />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-muted max-w-2xl text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              專注於 LLM 應用開發、MCP Protocol 架構設計與分散式系統建構。
              將前沿 AI 技術落地，打造高效能、可擴展的智能解決方案。
            </motion.p>

            {/* Tech Highlights */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {techHighlights.map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-2 px-4 py-2 terminal-border text-sm font-mono group hover:border-primary/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <IconComponent size={18} className="text-primary group-hover:text-primary/80 transition-colors" />
                    <span className="text-muted group-hover:text-white transition-colors">{tech.name}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link
                href="/projects"
                className="font-mono px-8 py-3 bg-primary text-background font-semibold rounded hover:bg-primary/90 transition-all glow-primary"
              >
                $ view --projects
              </Link>
              <Link
                href="/contact"
                className="font-mono px-8 py-3 border border-secondary text-secondary font-semibold rounded hover:bg-secondary hover:text-background transition-all"
              >
                $ send --message
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex gap-8 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { value: '5+', label: '年經驗' },
                { value: '50+', label: '完成專案' },
                { value: '99%', label: '系統可用性' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  <div className="font-mono text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="font-mono text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 1.5, duration: 0.5 },
                y: { delay: 1.5, duration: 1.5, repeat: Infinity },
              }}
            >
              <svg
                className="w-6 h-6 text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 relative" ref={servicesRef}>
        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-mono text-primary text-sm mb-4">
              <span className="text-muted">01.</span> services
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              專業<span className="text-gradient">服務</span>
            </h3>
            <p className="text-muted max-w-xl mx-auto">
              從 AI 系統架構到全端開發，提供完整的技術解決方案
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? 'visible' : 'hidden'}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32 relative" ref={projectsRef}>
        {/* Decorative Elements */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-mono text-primary text-sm mb-4">
              <span className="text-muted">02.</span> featured_work
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              精選<span className="text-gradient">作品</span>
            </h3>
            <p className="text-muted max-w-xl mx-auto">
              近期完成的代表性專案，展示技術能力與解決問題的方法
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isProjectsInView ? 'visible' : 'hidden'}
          >
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={isProjectsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 border border-primary text-primary rounded hover:bg-primary hover:text-background transition-all"
            >
              $ ls --all-projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            className="terminal-border p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                準備好開始合作了嗎？
              </h2>
              <p className="text-muted mb-8 max-w-lg mx-auto">
                無論是 AI 系統架構諮詢、全端開發專案，或是技術合作機會，都歡迎與我聯繫討論。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="font-mono px-8 py-3 bg-primary text-background font-semibold rounded hover:bg-primary/90 transition-all glow-primary"
                >
                  $ contact --now
                </Link>
                <Link
                  href="/about"
                  className="font-mono px-8 py-3 border border-muted/50 text-muted rounded hover:border-white hover:text-white transition-all"
                >
                  $ more --about-me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
