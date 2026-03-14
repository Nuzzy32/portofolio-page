const nodemailer = require('nodemailer')

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { first_name, last_name, email, subject, message } = req.body

  if (!first_name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'adrianfaishalhilmi@gmail.com',
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${first_name} ${last_name || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Email error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
