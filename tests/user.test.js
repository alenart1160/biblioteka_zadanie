const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
	await request(app)
		.post('/users')
		.send({
			name: 'Andreww',
			email: 'asd21126123@qweasd.pl',
			password: '123qweasd!',
		})
		.expect(400)
})
