const mongoose = require('mongoose')
const Pet = require('../models/Pet')
const { demoConnectionString } = require('../config')

const petsData = [
  { name: 'Mikey', age: 4, species: 'Gerbil', mammal: true },
  { name: 'Davey Bungooligan', age: 1, species: 'Piranha', mammal: false },
  { name: 'Suzy B', age: 12, species: 'Cat', mammal: true },
  { name: 'Terrence', age: 7, species: 'Sausagedog', mammal: true },
  { name: 'Philomena Jones', age: 3, species: 'Cat', mammal: true },
  { name: 'Henry', age: 3, species: 'Mole rat', mammal: true },
  { name: 'Sir Hiss', age: 1, species: 'Python', mammal: false },
  { name: 'Yolanda Sasquatch', age: 43, species: 'Parrot', mammal: false },
  { name: 'Chilli', age: 22, species: 'Hot Dog', mammal: false },
]

const demoQueries = async () => {
  let conn
  try {
    // Connect to database
    conn = await mongoose.connect(demoConnectionString)
    console.log(`MongoDB connected: ${conn.connection.host}`)

    /* -------- CREATE: Adding document(s) to database -------- */

    // Add new single document using .create()
    /* const response = await Pet.create({
      name: 'Rainbow Dash',
      age: 4,
      species: 'Pony',
      mammal: true,
    }) */

    // Add new document using constructor + .save()
    /* const newPet = new Pet({
      name: 'Tarantino',
      age: 1,
      species: 'Tarantula',
      mammal: false,
    })
    const response = await newPet.save()*/

    // Add multiple documents using .create()
    // const response = await Pet.create(petsData)

    /* -------- READ 1.1: Finding & retrieving document(s) from database -------- */
    // Get all documents in db
    // const response = await Pet.find()

    // Get one document by id
    // const response = await Pet.findById('63cfa0d84c4f1a69d6db2a1d')
    /* const response = await Pet.find({
      _id: '63cfa0d84c4f1a69d6db2a1d',
    }) */

    // Find documents by key + value
    /* const response = await Pet.find({
      species: 'Cat',
      age: 3,
    }) */

    // Find first document that matches
    /* const response = await Pet.findOne({
      species: 'Cat',
    }) */

    // Find using Regex
    /* const response = await Pet.find({
      species: /(D|d)og$/,
    }) */

    /* -------- READ 1.2: .find() with operators -------- */
    /* Link to list of operators: https://www.mongodb.com/docs/manual/reference/operator/query/ */

    // Lower than || Lower than or equal to
    /* const response = await Pet.find({
      age: {
        // $lt: 12,
        // $lte: 3,
        // $gt: 5,
        $gte: 5
      },
    }) */

    // Not equal to
    /* const response = await Pet.find({
      species: {
        $ne: 'Cat',
      },
      age: 43,
    }) */

    // Value is not in array
    /* const response = await Pet.find({
      species: {
        $nin: ['Cat', 'Parrot', 'Pony'],
      },
    }) */

    // Value is in array
    /* const response = await Pet.find({
      species: {
        $in: ['Cat', 'Parrot', 'Pony'],
      },
    }) */

    // Passing multiple queries using AND
    // prettier-ignore
    /* const response = await Pet.find({
      $and: [
        { species: 'Cat' },
        { age: 3 }
      ]
    }) */

    // Passing multiple queries using OR
    /* const response = await Pet.find({
      $or: [
        { species: 'Cat' },
        { age: 43 }
      ]
    }) */

    /* -------- READ 1.3: Filter fields -------- */

    // Projection
    /* const response = await Pet.find({}, {
      name: true,
      species: true,
      _id: false
    }) */
    /* const response = await Pet.find({
      species: 'Cat'
    }, {
      _id: false,
      __v: false,
      updatedAt: false,
      createdAt: false
    }) */

    // .select()
    /* const response = await Pet.find().select({
      name: true,
      age: true
    }) */
    // const response = await Pet.find().select('name species')

    /* -------- READ 1.3: Count, limit, skip, sort documents -------- */
    // .count()
    /* const response = await Pet.find({
      species: 'Cat'
    }).count() */

    // .limit()
    // const response = await Pet.find().limit(3)

    // .skip()
    // const response = await Pet.find().skip(2)
    // const response = await Pet.find().skip(5).limit(5)

    // .sort()
    /* const response = await Pet.find().sort({
      // age: -1
      name: 1
    }) */
    // const response = await Pet.find({ age: { $lte: 3 } }).sort({ age: -1, name: 1 })

    /* -------- UPDATE: Updatings document(s) in the database -------- */

    // .findOne()
    /* const petToUpdate = await Pet.findOne({ species: 'Pony' })
    petToUpdate.species = 'Highland Pony'
    petToUpdate.age = 42
    const response = await petToUpdate.save() */

    // .findByIdAndUpdate()
    /* const response = await Pet.findByIdAndUpdate('63cf9ee73dc508f29442e588', {
      age: 47,
      species: 'My Little Pony',
      mammal: false
    }) */

    // .findOneAndUpdate()
    /* const response = await Pet.findOneAndUpdate({
      age: 47
    }, {
      species: 'Too old to be real'
    }) */

    /* -------- DELETE: Removing document(s) from database -------- */

    // .findByIdAndDelete()
    // const response = await Pet.findByIdAndDelete('63cf9ee73dc508f29442e588')

    // .findOneAndDelete()
    /* const response = await Pet.findOneAndDelete({
      species: 'Tarantula'
    }) */

    // .deleteMany()
    /* const response = await Pet.deleteMany({
      species: 'Cat'
    }) */
    // const response = await Pet.deleteMany()

    const response = 'Done!'
    console.log(response)
  } catch (error) {
    // Log eny eventual errors to Terminal
    console.error(error)
  } finally {
    // Disconnect from database
    if (conn) conn.disconnect()
    // End Node process
    process.exit(0)
  }
}

demoQueries()
