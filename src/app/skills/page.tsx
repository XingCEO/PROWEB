'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Footer } from '@/components/Footer'
import {
  NeuralIcon,
  GlobeIcon,
  DatabaseIcon,
  CloudIcon,
  AppleIcon,
  ArchitectureIcon,
  LayersIcon,
  IconBackground,
} from '@/components/Icons'

const skills = [
  {
    category: '人工智慧',
    icon: NeuralIcon,
    gradient: 'from-violet-500/20 to-purple-500/20',
    color: 'from-violet-500 to-purple-500',
    items: [
      { name: 'LLM 大型語言模型', level: 95 },
      { name: 'MCP Protocol', level: 90 },
      { name: 'PyTorch', level: 85 },
      { name: 'RAG 檢索增強生成', level: 90 },
      { name: '資訊檢索系統', level: 85 },
    ],
  },
  {
    category: '網頁開發',
    icon: GlobeIcon,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'TypeScript', level: 95 },
    ],
  },
  {
    category: '資料庫',
    icon: DatabaseIcon,
    gradient: 'from-emerald-500/20 to-green-500/20',
    color: 'from-green-500 to-emerald-500',
    items: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 85 },
      { name: 'Cassandra', level: 80 },
    ],
  },
  {
    category: '基礎架構',
    icon: CloudIcon,
    gradient: 'from-orange-500/20 to-amber-500/20',
    color: 'from-orange-500 to-red-500',
    items: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Linux', level: 90 },
    ],
  },
  {
    category: 'Apple 生態系',
    icon: AppleIcon,
    gradient: 'from-pink-500/20 to-rose-500/20',
    color: 'from-pink-500 to-rose-500',
    items: [
      { name: 'Swift', level: 85 },
      { name: 'Xcode', level: 85 },
      { name: 'Apple Silicon', level: 90 },
    ],
  },
]

const specializations = [
  { title: 'LLM & MCP 架構師', icon: NeuralIcon, gradient: 'from-violet-500/20 to-purple-500/20' },
  { title: '分散式資料庫', icon: LayersIcon, gradient: 'from-emerald-500/20 to-green-500/20' },
  { title: '系統架構設計', icon: ArchitectureIcon, gradient: 'from-blue-500/20 to-cyan-500/20' },
]

const additionalSkills = [
  'TailwindCSS', 'GraphQL', 'REST APIs', 'Kubernetes', 'CI/CD',
  'Git', 'Terraform', 'Prometheus', 'Grafana', 'Elasticsearch',
  'Vector Databases', 'Embeddings', 'Fine-tuning', 'Prompt Engineering',
]

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between font-mono text-sm">
        <span className="text-muted">{name}</span>
        <motion.span
          className="text-primary"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

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

export default function SkillsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <>
      <section className="min-h-dvh pt-24 pb-20 relative" ref={ref}>
        {/* Decorative Elements */}
        <div className="absolute top-60 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-32 left-10 w-16 h-16 border border-primary/10 rounded-xl"
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-48 right-20 w-12 h-12 border border-secondary/10 rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-20 h-20 border border-primary/5 rounded-lg rotate-45"
          animate={{ y: [0, -15, 0], rotate: [45, 60, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Page Header */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-mono text-primary text-sm mb-4">
              <span className="text-muted">02.</span> skills
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              技術<span className="text-gradient">專長</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Senior AI & Full-Stack Systems Architect
            </p>
          </motion.div>

          {/* Specializations */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {specializations.map((spec, index) => {
              const IconComponent = spec.icon
              return (
                <motion.div
                  key={spec.title}
                  className="terminal-border px-6 py-3 flex items-center gap-3 hover:glow-primary transition-all group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <IconBackground gradient={spec.gradient} className="w-10 h-10">
                    <IconComponent size={20} className="text-primary" />
                  </IconBackground>
                  <span className="font-mono text-sm text-white group-hover:text-primary transition-colors">{spec.title}</span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {skills.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.category}
                  className="terminal-border p-6 hover:glow-primary transition-all relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-2 font-mono text-xs text-muted">
                        {category.category.toLowerCase().replace(/ /g, '-')}.skills
                      </span>
                    </div>

                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-6">
                      <IconBackground gradient={category.gradient}>
                        <IconComponent size={24} className="text-primary" />
                      </IconBackground>
                      <h3 className="font-mono text-lg text-white">{category.category}</h3>
                    </div>

                    {/* Skill Bars */}
                    <div className="space-y-4">
                      {category.items.map((skill, skillIndex) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          delay={0.2 + categoryIndex * 0.1 + skillIndex * 0.08}
                          color={category.color}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="terminal-border p-8 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

              <div className="relative z-10">
                <h3 className="font-mono text-lg text-white mb-6 text-center">
                  <span className="text-primary">&gt;</span> 其他熟悉技術
                </h3>
                <motion.div
                  className="flex flex-wrap justify-center gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  {additionalSkills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="font-mono text-xs px-4 py-2 border border-muted/30 text-muted rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Learning Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <p className="font-mono text-sm text-muted">
              <span className="text-secondary">→</span> 持續探索中：
              <span className="text-primary ml-2">Agent Systems</span>、
              <span className="text-primary">Multi-Modal AI</span>、
              <span className="text-primary">Edge Computing</span>
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}
