const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paragraphSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  markups: [{
    mark: String,
    start: Number,
    end: Number,
    href: String
  }]
});

const Paragraph = mongoose.model('paragraph', paragraphSchema);

module.exports = Paragraph;
