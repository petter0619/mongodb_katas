const mongoose = require('mongoose')
const { connectionString } = require('../config')

/*
Add president Joe Biden to the database:
- The 46th president
- Born November 20, 1942
- Took office: 20th january 2021
- He's been in office for ca 732 days

Log the response to the terminal
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
