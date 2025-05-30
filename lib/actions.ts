"use server"

export async function sendContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email) {
    throw new Error("Name and email are required")
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format")
  }

  try {
    // In a real application, you would use an email service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - AWS SES

    // For demo purposes, we'll simulate the email sending
    console.log("Sending email to: stasmiheev151@gmail.com")
    console.log("Form data:", { name, email, company, message })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here's how you would implement with a real email service:
    /*
    const emailContent = {
      to: 'stasmiheev151@gmail.com',
      subject: `Новая заявка на доступ к NestNet от ${name}`,
      html: `
        <h2>Новая заявка на доступ к платформе NestNet</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Компания:</strong> ${company}</p>` : ''}
        ${message ? `<p><strong>Сообщение:</strong></p><p>${message}</p>` : ''}
        <hr>
        <p><em>Отправлено через форму на сайте NestNet</em></p>
      `
    }

    // Example with Nodemailer:
    await transporter.sendMail(emailContent)
    
    // Example with SendGrid:
    await sgMail.send(emailContent)
    
    // Example with Resend:
    await resend.emails.send(emailContent)
    */

    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("Email sending error:", error)
    throw new Error("Failed to send email")
  }
}
