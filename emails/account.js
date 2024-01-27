const sgMail = require('@sendgrid/mail')

const authEmail = process.env.AUTH_EMAIL

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
let test
const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: authEmail,
		subject: 'Welcome to the app!',
		text: `Welcome to the app, ${name}.`,
	})
}

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: authEmail,
		subject: 'Goodbye!',
		text: `We are sorry that you are leaving us ${name}`,
	})
}

module.export = {
	sendWelcomeEmail,
	sendCancelationEmail,
}
