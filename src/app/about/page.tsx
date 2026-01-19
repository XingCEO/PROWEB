'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Footer } from '@/components/Footer'
import {
  NeuralIcon,
  DatabaseIcon,
  GlobeIcon,
  AppleIcon,
  IconBackground,
} from '@/components/Icons'

const stats = [
  { value: '5+', label: '年經驗' },
  { value: '50+', label: '完成專案' },
  { value: '30+', label: '滿意客戶' },
  { value: '99%', label: '系統可用性' },
]

const timeline = [
  {
    year: '2024',
    title: 'Senior AI & Full-Stack Systems Architect',
    company: '自主研發 / 顧問',
    description: '專注於 LLM 應用開發、MCP Protocol 架構設計，以及分散式系統建構。',
  },
  {
    year: '2022',
    title: '資深全端工程師',
    company: '科技公司',
    description: '負責核心產品架構設計，帶領團隊開發企業級應用程式，導入 AI 技術優化流程。',
  },
  {
    year: '2020',
    title: '全端工程師',
    company: '新創公司',
    description: '從零到一建立多個產品，處理高併發流量，設計可擴展的系統架構。',
  },
  {
    year: '2019',
    title: '軟體開發者',
    company: '自由接案',
    description: '開始程式開發之旅，累積前後端與資料庫實戰經驗。',
  },
]

const expertise = [
  {
    title: 'LLM & MCP 架構',
    description: '設計與實作大型語言模型應用，專精 MCP Protocol、RAG 系統與智能代理架構。',
    icon: NeuralIcon,
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    title: '分散式系統',
    description: '建構高可用、可擴展的分散式資料庫與微服務架構，確保系統穩定性。',
    icon: DatabaseIcon,
    gradient: 'from-emerald-500/20 to-green-500/20',
  },
  {
    title: '全端開發',
    description: '運用 React/Next.js、Node.js、TypeScript 打造現代化網頁應用程式。',
    icon: GlobeIcon,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Apple 生態系',
    description: '熟悉 Swift 開發與 Apple Silicon 優化，打造原生 macOS/iOS 應用。',
    icon: AppleIcon,
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
  const ref = useRef(null)
  const timelineRef = useRef(null)
  const expertiseRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isTimelineInView = useInView(timelineRef, { once: true, margin: '-100px' })
  const isExpertiseInView = useInView(expertiseRef, { once: true, margin: '-100px' })

  return (
    <>
      <section className="min-h-dvh pt-24 pb-20 relative" ref={ref}>
        {/* Decorative Elements */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-32 right-10 w-16 h-16 border border-primary/10 rounded-xl"
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-60 left-20 w-12 h-12 border border-secondary/10 rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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
              <span className="text-muted">01.</span> about_me
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              關於<span className="text-gradient">我</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Senior AI & Full-Stack Systems Architect
            </p>
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Text Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="terminal-border p-6 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-primary/20">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-muted">about.md</span>
                  </div>

                  <div className="font-mono text-sm space-y-4">
                    <p className="text-muted">
                      <span className="text-secondary"># </span>
                      <span className="text-white">你好，世界！</span>
                    </p>
                    <p className="text-muted leading-relaxed">
                      我是一位專注於 AI 系統架構的全端工程師，擁有豐富的 LLM 應用開發與分散式系統設計經驗。
                      熱衷於將前沿 AI 技術落地，打造高效能、可擴展的智能解決方案。
                    </p>
                    <p className="text-muted leading-relaxed">
                      我的核心專長包括{' '}
                      <span className="text-primary">大型語言模型 (LLM)</span>、{' '}
                      <span className="text-primary">MCP Protocol</span>、{' '}
                      <span className="text-primary">RAG 系統</span>，以及{' '}
                      <span className="text-primary">分散式資料庫架構</span>。
                      同時精通現代網頁技術棧與 Apple 生態系開發。
                    </p>
                    <p className="text-muted leading-relaxed">
                      致力於探索 AI Agent、Multi-Modal AI 等新興技術，
                      並將研究成果轉化為實際可用的產品與服務。
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="terminal-border p-6 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />

                <div className="relative z-10">
                  <h3 className="font-mono text-white mb-4">
                    <span className="text-primary">&gt;</span> 核心理念
                  </h3>
                  <ul className="space-y-3 font-mono text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">◆</span>
                      <span>架構優先，可擴展性是系統成功的關鍵</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">◆</span>
                      <span>AI 技術應服務於解決真實問題</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">◆</span>
                      <span>持續學習，擁抱技術演進與最佳實踐</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">◆</span>
                      <span>注重程式碼品質與系統可維護性</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="terminal-border p-6 text-center hover:glow-primary transition-all group relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <motion.div
                        className="font-mono text-3xl md:text-4xl font-bold text-gradient mb-2"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="font-mono text-xs text-muted uppercase tracking-wider group-hover:text-primary transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Info */}
              <div className="terminal-border p-6 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-primary/20">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-muted">info.json</span>
                  </div>
                  <pre className="font-mono text-sm text-muted overflow-x-auto">
                    <code>
{`{
  "職位": "Senior AI & Full-Stack Architect",
  "專長": [
    "LLM & MCP 架構",
    "分散式資料庫",
    "系統架構設計"
  ],
  "地點": "台灣",
  "狀態": "開放合作機會",
  "回覆時間": "< 24 小時"
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Expertise Section */}
          <motion.div
            ref={expertiseRef}
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-mono text-2xl text-white mb-8 text-center">
              <span className="text-primary">&gt;</span> 專業領域
            </h3>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isExpertiseInView ? 'visible' : 'hidden'}
            >
              {expertise.map((item) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.title}
                    className="terminal-border p-6 hover:glow-primary transition-all group relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      <div className="mb-4">
                        <IconBackground gradient={item.gradient}>
                          <IconComponent size={24} className="text-primary" />
                        </IconBackground>
                      </div>
                      <h4 className="font-mono text-white font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            ref={timelineRef}
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-mono text-2xl text-white mb-12 text-center">
              <span className="text-primary">&gt;</span> 經歷
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                    </div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="terminal-border p-6 hover:glow-primary transition-all relative overflow-hidden group">
                        {/* Gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-xs px-2 py-1 bg-primary/20 text-primary rounded border border-primary/20">
                              {item.year}
                            </span>
                          </div>
                          <h4 className="font-mono text-lg text-white mb-1">{item.title}</h4>
                          <p className="font-mono text-sm text-secondary mb-3">{item.company}</p>
                          <p className="text-sm text-muted">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}
