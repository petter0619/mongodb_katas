const mongoose = require('mongoose')

const PresidentSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
    },
    name: {
      type: String,
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
    },
    days_in_office: {
      type: Number,
    },
    sat_two_full_terms: {
      type: Boolean,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('President', PresidentSchema)
