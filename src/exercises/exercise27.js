const mongoose = require('mongoose')
const { connectionString } = require('../config')

/*
Using the limit and skip methods Retrieve the number, name and days 
in office of presidents 6 through 10 in the order in which they were president
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

    throw new Error('Not Implemented')
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
