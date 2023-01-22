const mongoose = require('mongoose')
const Pet = require('../models/Pet')

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
    mongoose.set('strictQuery', false) // https://stackoverflow.com/questions/74747476/deprecationwarning-mongoose-the-strictquery-option-will-be-switched-back-to
    conn = await mongoose.connect('mongodb://admin:password123@localhost:27017/demo?authSource=admin')
    console.log(`MongoDB connected: ${conn.connection.host}`)

    const response = "Let's get started!"

    /* -------- CREATE: Adding document(s) to database -------- */
    // Add new document using constructor + .save()
    /* const newPet = new Pet({
      name: 'Rainbow Dash',
      age: 9,
      species: 'Pony',
      mammal: true,
    })
    const response = await newPet.save() */

    // Add new single document using .create()
    // const response = await Pet.create({ name: 'Chilli', age: 22, species: 'Hot Dog', mammal: false })

    // Add multiple documents using .create()
    // const response = await Pet.create(petsData)

    /* -------- READ 1.1: Finding & retrieving document(s) from database -------- */
    // Get all documents in db
    // const response = await Pet.find()

    // Get one document by id
    // const response = await Pet.findById('63cd4214c0810e2349fe3222')

    // Find documents by key + value
    // const response = await Pet.find({ species: 'Cat' })
    // const response = await Pet.find({ mammal: false, age: 43 })

    // Find first document that matches
    // const response = await Pet.findOne({ species: 'Cat' })
    // const response = await Pet.findOne({ mammal: false })

    // Find using Regex
    // const response = await Pet.find({ species: /(d|D)og$/ })

    /* -------- READ 1.2: .find() with operators -------- */

    // Link to list of operators: https://www.mongodb.com/docs/manual/reference/operator/query/

    // Greater than || Greater than or equal to
    /* const response = await Pet.find({
      age: {
        // $gt: 4,
        $gte: 3,
      },
    }) */

    // Lower than || Lower than or equal to
    /* const response = await Pet.find({
      age: {
        // $lt: 3,
        $lte: 3,
      },
    }) */

    // Not equal to
    /* const response = await Pet.find({
      species: {
        $ne: 'Cat',
      },
    }) */

    // Value is not in array
    /* const response = await Pet.find({
      species: {
        $nin: ['Cat', 'Mole rat', 'Parrot'],
      },
    }) */

    // Value is in array
    /* const response = await Pet.find({
      species: {
        $in: ['Cat', 'Mole rat', 'Parrot'],
      },
    }) */

    // Passing multiple queries using AND
    // prettier-ignore
    /* const response = await Pet.find({
      $and: [
        { species: { $ne: 'Cat' } }, 
        { mammal: false }, 
        { age: { $lte: 5 } }
      ],
    }) */

    // Passing multiple queries using OR
    /* const response = await Pet.find({
      $or: [
        { mammal: false }, 
        { species: 'Cat' }
      ],
    }) */

    /* -------- READ 1.3: Filter fields -------- */

    // Projection
    /* const response = await Pet.find({}, {
      name: true,
      age: true
    }) */
    /* const response = await Pet.find({}, {
      createdAt: false,
      updatedAt: false,
      _id:  false,
      __v: false
    }) */

    // .select()
    // const response = await Pet.find({}).select('name age')
    // const response = await Pet.find({}).select('name age -_id')

    /* const response = await Pet.find({}).select({
      name: true,
      age: true
    }) */
    /* const response = await Pet.find({}).select({
      createdAt: false,
      updatedAt: false,
      _id:  false,
      __v: false
    }) */

    /* -------- READ 1.3: Count documents -------- */
    // .count()
    // const response = await Pet.find({ species: 'Cat'}).count()

    // .limit()
    // const response = await Pet.find().limit(3)

    // .skip()
    // const response = await Pet.find().skip(5)
    // const response = await Pet.find().skip(5).limit(2)

    // .sort()
    // const response = await Pet.find().sort({ name: 1 })
    // const response = await Pet.find().sort({ age: -1 })
    // const response = await Pet.find({ age: { $lte: 3 } }).sort({ age: -1, name: 1 })

    /* -------- UPDATE: Updatings document(s) in the database -------- */

    /* const updatePet = await Pet.findOne({ name: 'Rainbow Dash' })
    updatePet.age = 112
    updatePet.species = 'Horse'
    const response = await updatePet.save() */

    /* const response = await Pet.findByIdAndUpdate('63cd417c70326b13757e4c10', {
      age: 57,
      species: 'Big horse'
    }) */

    /* const response = await Pet.findOneAndUpdate({ name: 'Rainbow Dash' }, {
      age: 41,
      species: 'Tiny big horse pony'
    }) */

    /* -------- DELETE: Removing document(s) from database -------- */
    // const response = await Pet.findByIdAndDelete('63cd41c6453980764a16f1cd')
    // const response = await Pet.findOneAndDelete({ species: 'Cat' })
    // const response = await Pet.deleteMany({ species: /(D|d)og$/ })
    // const response = await Pet.deleteMany()

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
