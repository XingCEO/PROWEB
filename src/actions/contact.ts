'use server'

import { z } from 'zod'
import { ContactFormState } from '@/lib/types'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  _honey: z.string().optional(),
})

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Extract form data
  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
    _honey: formData.get('_honey') as string,
  }

  // Honeypot check - if filled, silently reject (return success to fool bots)
  if (rawData._honey && rawData._honey.length > 0) {
    // Simulate delay to make it look real
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      success: true,
      error: null,
      message: 'Thank you! Your message has been sent successfully.',
    }
  }

  // Validate the data
  const validatedData = contactSchema.safeParse(rawData)

  if (!validatedData.success) {
    const errors = validatedData.error.flatten().fieldErrors
    const firstError = Object.values(errors)[0]?.[0] || 'Invalid form data'
    return {
      success: false,
      error: firstError,
      message: null,
    }
  }

  try {
    // In production, you would send an email here using a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For demo purposes, we'll simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Example of what the email sending would look like:
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'your@email.com',
    //   subject: `Portfolio Contact: ${validatedData.data.subject}`,
    //   text: `
    //     Name: ${validatedData.data.name}
    //     Email: ${validatedData.data.email}
    //
    //     Message:
    //     ${validatedData.data.message}
    //   `,
    // })

    console.log('Contact form submitted:', validatedData.data)

    return {
      success: true,
      error: null,
      message: 'Thank you! Your message has been sent successfully.',
    }
  } catch (error) {
    console.error('Failed to send message:', error)
    return {
      success: false,
      error: 'Failed to send message. Please try again later.',
      message: null,
    }
  }
}
