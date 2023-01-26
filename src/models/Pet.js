const mongoose = require('mongoose')

// Schema Types list: https://mongoosejs.com/docs/schematypes.html
const PetSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    species: String,
    mammal: {
      type: Boolean,
      default: true,
    },
    // Referencing (one)
    /* president: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'President',
    }, */
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Pet', PetSchema)
