const sgMail = require('@sendgrid/mail')

const authEmail = 'a.lenart2001@gmail.com'

const sendGridApiKey = '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'
sgMail.setApiKey(sendGridApiKey)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: authEmail,
		subject: 'Welcome to the app!',
		text: `Welcome to the app, ${name}.`,
	})
}
module.export = {
	sendWelcomeEmail,
}
