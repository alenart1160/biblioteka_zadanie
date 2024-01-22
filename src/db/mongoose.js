const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api')

// const me = new User({
// 	name: 'Arek',
// 	age: 22,
// 	email: 'arek@arek.pl',
// 	password: 'paSSword123',
// })

// me.save()
// 	.then(() => {
// 		console.log(me)
// 	})
// 	.catch((error) => {
// 		console.log('Error!', error)
// 	})

// const task = new Task({
// 	description: 'Learn the Mongoose library',
// 	completed: false,
// })

// task
// 	.save()
// 	.then(() => {
// 		console.log(task)
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})
