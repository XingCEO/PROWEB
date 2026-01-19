export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  _honey?: string
}

export interface ContactFormState {
  success: boolean
  error: string | null
  message: string | null
}
