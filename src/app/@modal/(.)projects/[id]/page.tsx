'use client'

import { useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'

export default function ProjectModal({ params }: { params: { id: string } }) {
  const router = useRouter()
  const project = projects.find((p) => p.id === params.id)

  const handleClose = useCallback(() => {
    router.back()
  }, [router])

  // Handle escape key and scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }

    // Calculate scrollbar width and add padding to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [handleClose])

  if (!project) {
    return null
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          aria-hidden="true"
        />

        {/* Modal Content */}
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto terminal-border bg-slate-900/95 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Terminal Header */}
          <div className="sticky top-0 flex items-center justify-between px-4 py-3 border-b border-primary/20 bg-slate-900/95 backdrop-blur-md z-10">
            <div className="flex items-center gap-2">
              <button
                onClick={handleClose}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                aria-label="Close modal"
              />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 font-mono text-xs text-muted">
                ~/projects/{project.id}/README.md
              </span>
            </div>
            <button
              onClick={handleClose}
              className="font-mono text-xs text-muted hover:text-white transition-colors"
              aria-label="Close modal"
            >
              [ESC]
            </button>
          </div>

          {/* Project Image */}
          <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-6xl text-primary/30">&lt;/&gt;</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h1
              id="modal-title"
              className="font-mono text-2xl md:text-3xl font-bold text-white mb-4"
            >
              {project.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1 bg-slate-800 text-primary rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="prose prose-invert prose-sm max-w-none mb-8">
              <div className="font-mono text-sm text-muted whitespace-pre-line leading-relaxed">
                {project.longDescription}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-6 py-2 bg-primary text-background font-semibold rounded hover:bg-primary/90 transition-all"
                >
                  $ open --live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-6 py-2 border border-secondary text-secondary font-semibold rounded hover:bg-secondary hover:text-background transition-all"
                >
                  $ git clone
                </a>
              )}
              <button
                onClick={handleClose}
                className="font-mono text-sm px-6 py-2 border border-muted/50 text-muted font-semibold rounded hover:border-white hover:text-white transition-all"
              >
                $ cd ..
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
