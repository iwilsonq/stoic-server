const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Paragraph = require('./paragraph');

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  image: {
    type: String
  },
  imageId: {
    type: String
  },
  caption: {
    type: String
  },
  tags: [{
    type: String
  }],
  isPublished: {
    type: Boolean,
    default: false
  },
  sections: {

  },
  paragraphs: {
    type: [Paragraph],
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;
