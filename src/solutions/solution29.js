const mongoose = require('mongoose')
const { connectionString } = require('../config')
const President = require('../models/President')

/*
Who is the greatest US president of all time
Log the response to ther Terminal.
*/

const exercise = async () => {
  let conn
  try {
    // Connect to database
    mongoose.set('strictQuery', false) // https://stackoverflow.com/questions/74747476/deprecationwarning-mongoose-the-strictquery-option-will-be-switched-back-to
    conn = await mongoose.connect(connectionString)
    console.log(`MongoDB connected: ${conn.connection.host}`)

    // --------------------------------
    // ------ Add solution below ------
    // --------------------------------
    // const response = await President.findOne({ name: 'Franklin D. Roosevelt' })
    // const response = await President.findOne({ name: 'George Washington' })
    // const response = await President.findOne({ name: 'Abraham Lincoln' })
    const response = await President.findOne({ name: 'Theodore Roosevelt' })

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

exercise()
