const mongoose = require('mongoose')

const politicalParties = {
  democrat: 'Democrat',
  republican: 'Republican',
  whig: 'Whig',
}

const PresidentSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
      unique: [true, 'That number already exists'],
      min: 1,
      max: 100,
    },
    name: {
      type: String,
      lowercase: true,
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    birth_year: {
      type: Number,
    },
    death_year: {
      type: Number,
    },
    took_office: {
      type: String,
    },
    left_office: {
      type: String,
    },
    party: {
      type: String,
      uppercase: true,
      // enum: ['Democrat', 'Republican', 'Whig'],
      // enum: Object.values(politicalParties),
    },
    days_in_office: {
      type: Number,
    },
    sat_two_full_terms: {
      type: Boolean,
    },
    // Referencing (many)
    /* pets: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Pet',
    }, */
    // Embedding
    /* pets: {
      type: [
        {
          name: String,
          age: Number,
          species: String,
        },
      ],
    }, */
  },
  { timestamps: true }
)

module.exports = mongoose.model('President', PresidentSchema)
