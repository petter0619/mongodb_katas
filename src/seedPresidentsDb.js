const mongoose = require('mongoose')
const { connectionString } = require('./config')
const President = require('./models/President')
const { presidents } = require('./data/presidents')

const seedPresidentsDb = async () => {
  let conn
  try {
    // Connect to database
    mongoose.set('strictQuery', false) // https://stackoverflow.com/questions/74747476/deprecationwarning-mongoose-the-strictquery-option-will-be-switched-back-to
    conn = await mongoose.connect(connectionString)

    // Clear database from any existing data
    console.log('Clearing database...')
    await President.deleteMany()

    // Add data to database
    console.log('Adding data...')
    /*
    for (const president of presidents) {
      const presidentInstance = new President({
        number: president.number,
        name: president.name,
        birth_year: president.birth_year,
        death_year: president.death_year,
        took_office: president.took_office,
        left_office: president.left_office,
        party: president.party,
        days_in_office: president.days_in_office,
        sat_two_full_terms: president.sat_two_full_terms,
      })
      const res = await presidentInstance.save()

      // const res = await President.create(president)
      if (res) console.log(`${president.name} added to db...`)
    }
    */
    await President.create(presidents)

    console.log('Database successfully populated with data...')
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

seedPresidentsDb()
