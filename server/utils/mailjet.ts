import Mailjet from 'node-mailjet'
import { useRuntimeConfig } from '#imports'

export const initMailjet = () => {
  const config = useRuntimeConfig()
  return new Mailjet({
    apiKey: config.mailjet.apiKey,
    apiSecret: config.mailjet.apiSecret
  })
}

export const sendEmail = async (
  to: string,
  subject: string,
  htmlContent: string
) => {
  const mailjet = initMailjet()
  const config = useRuntimeConfig()

  try {
    await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: config.mailjet.adminEmail,
            Name: 'Fashion Store'
          },
          To: [
            {
              Email: to,
              Name: to
            }
          ],
          Subject: subject,
          HTMLPart: htmlContent
        }
      ]
    })
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
}