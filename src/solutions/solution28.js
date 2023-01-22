const mongoose = require('mongoose')
const { connectionString } = require('../config')
const President = require('../models/President')

/*
Retrieve the name, days_in_office, death year and birth year all Republican and Democrat presidents 
that were in office during the 1800s only and served between 1461 and 2992 days
in descending order of birth
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
      $and: [
        { party: { $in: ['Democrat', 'Republican'] } },
        { took_office: /^18/ },
        { left_office: /^18/ },
        { days_in_office: { $gt: 1461 } },
        { days_in_office: { $lt: 2992 } },
      ],
    })
      .sort({ birth_year: -1 })
      .select('name birth_year death_year days_in_office -_id')

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
