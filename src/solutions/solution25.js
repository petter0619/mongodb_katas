const mongoose = require('mongoose')
const { connectionString } = require('../config')
const President = require('../models/President')

/*
Retrieve the number, name and year they died of the first 5 presidents sorted 
by the order in which they were president
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
    const response = await President
      .find()
      .sort('number')
      .limit(5)
      .select('number name death_year')

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
