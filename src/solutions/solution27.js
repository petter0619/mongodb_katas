const mongoose = require('mongoose')
const { connectionString } = require('../config')
const President = require('../models/President')

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
    // prettier-ignore
    const response = await President.find()
      .sort('number')
      .skip(5)
      .limit(5)
      .select('number name days_in_office')

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
