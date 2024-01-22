require('../db/mongoose')
const Task = require('../models/tasks')

Task.findByIdAndDelete('65972813490fbad42e67a782')
	.then((result) => {
		console.log(result)
		return Task.countDocuments({ completed: false })
	})
	.then((result) => {
		console.log(result)
	})
	.catch((e) => {
		console.log(e)
	})

const deleteTaskAndCount = async (id) => {
	const task = await Task.findByIdAndDelete(id)
	const count = await Task.countDocuments({ completed: false })
	return count
}
deleteTaskAndCount('65972813490fbad42e67a782').then((count) => {
	console.log(count)
})
