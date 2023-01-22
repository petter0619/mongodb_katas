const mongoose = require('mongoose')
const { connectionString } = require('../config')
const President = require('../models/President')

/*
Update the following information about Donald Trump to the database:
- Left office: 20th january 2021
- He's been in office for 1461 days
- Did not site 2 terms

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
    /* const donaldTrump = await President.findOne({
      name: 'Donald J. Trump',
      number: 45,
    })

    donaldTrump.left_office = '2021-01-20'
    donaldTrump.days_in_office = 1461
    donaldTrump.sat_two_full_terms = false

    const response = await donaldTrump.save() */

    const response = await President.findOneAndUpdate(
      {
        name: 'Donald J. Trump',
        number: 45,
      },
      {
        left_office: '2021-01-20',
        days_in_office: 1461,
        sat_two_full_terms: false,
      }
    )
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
