import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ProjectDetailPage } from '@/components/ProjectDetailPage'

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | John Doe`,
    description: project.description,
    openGraph: {
      title: `${project.title} | John Doe`,
      description: project.description,
      type: 'article',
    },
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} />
}
