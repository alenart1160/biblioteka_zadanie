const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const authMail = process.env.EMAIL_FROM
const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: { email: 'a.lenart2001@gmail.com', name: 'Arek Lenart' },
		name: 'Andrew',
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
	})
}

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: { email: 'a.lenart2001@gmail.com', name: 'Arek Lenart' },
		name: 'Andrew',
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
	})
}

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail,
}
