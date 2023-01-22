const mongoose = require('mongoose')
const { connectionString } = require('../config')
const President = require('../models/President')

/*
Use the $or operator to get a list of presidents that where from one of the following parties:
- Federalist
- Whig
- Democratic-Republican

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
    const response = await President.find({
      $or: [{ party: 'Federalist' }, { party: 'Whig' }, { party: 'Democratic-Republican' }],
    })

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
