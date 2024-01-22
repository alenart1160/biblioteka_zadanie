const { MongoClient, ObjectId } = require('mongodb')
// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'task-manager'

const id = new ObjectId()
console.log(id)
async function main() {
	await client.connect()
	console.log('Connected successfully to server')
	const db = client.db(dbName)
	const collection = db.collection('users')

	// const insertResult = await collection.insertMany([
	// 	{ Name: 'arek', age: 22 },
	// 	{ Name: 'Janek', age: 33 },
	// ])

	//	console.log('Inserted documents =>', insertResult)

	const findResult = await collection
		.find({
			Name: 'arek',
		})
		.toArray()

	console.log('Found documents =>', findResult)
	client.close()
}

async function update() {
	await client.connect()
	console.log('Connected successfully to server')
	const db = client.db(dbName)
	const collection = db.collection('users')

	const updateResult = await collection.updateOne(
		{ _id: new ObjectId('65954f3077bb77c0f90cc766') },
		{
			$set: {
				Name: 'Majki',
			},
		}
	)

	console.log('Updated documents =>', updateResult)
	client.close()
}
async function updateMany() {
	await client.connect()
	console.log('Connected successfully to server')
	const db = client.db(dbName)
	const collection = db.collection('users')

	const updateResult = await collection.updateMany(
		{ Name: 'arek' },
		{
			$set: {
				Name: 'Arek',
			},
		}
	)

	console.log('Updated documents =>', updateResult)
	client.close()
}
//main()
//update()
updateMany()
