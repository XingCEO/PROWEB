'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/lib/types'

export function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <motion.div
      className="min-h-dvh pt-20 pb-24 md:pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-primary transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            $ cd ~/projects
          </Link>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          className="terminal-border overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-slate-900/50">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 font-mono text-xs text-muted">
              ~/projects/{project.id}/README.md
            </span>
          </div>

          {/* Project Image */}
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
            >
              <span className="font-mono text-6xl md:text-8xl text-primary/30">&lt;/&gt;</span>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-16 h-16 border border-secondary/20 rounded-lg"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <motion.h1
              className="font-mono text-2xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {project.title}
            </motion.h1>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="font-mono text-xs px-3 py-1 bg-slate-800 text-primary rounded"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="font-mono text-sm text-muted whitespace-pre-line leading-relaxed prose prose-invert prose-sm max-w-none">
                {project.longDescription.split('\n').map((line, index) => {
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-lg text-white font-bold mt-6 mb-3">
                        <span className="text-primary">#</span> {line.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (line.startsWith('- **')) {
                    const match = line.match(/- \*\*(.+?)\*\*：(.+)/)
                    if (match) {
                      return (
                        <p key={index} className="mb-2 pl-4">
                          <span className="text-secondary">◆</span>{' '}
                          <span className="text-primary font-semibold">{match[1]}</span>：
                          <span className="text-muted">{match[2]}</span>
                        </p>
                      )
                    }
                  }
                  if (line.trim() === '') {
                    return <br key={index} />
                  }
                  return <p key={index} className="mb-2">{line}</p>
                })}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              className="flex flex-wrap gap-4 pt-6 border-t border-primary/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-6 py-3 bg-primary text-background font-semibold rounded hover:bg-primary/90 transition-all glow-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  $ open --live
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-6 py-3 border border-secondary text-secondary font-semibold rounded hover:bg-secondary hover:text-background transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  $ git clone
                </motion.a>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Related Projects Hint */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/projects"
            className="font-mono text-sm text-muted hover:text-primary transition-colors"
          >
            $ ls --more-projects →
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
