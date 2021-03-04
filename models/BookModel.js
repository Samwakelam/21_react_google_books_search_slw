const mongoose = require('mongoose'); 
const {Schema} = mongoose;

const BookSchema = new Schema({
  id: {type : String},
  authors: [{type : String}],
  averageRating: {type: Number},
  categories: [{type: String}],
  description: {type : String},
  img: {type: String},
  infoLink: {type: String},
  pageCount: {type: Number},
  publishedDate: {type: String},
  publisher: {type: String},
  title: {type : String},
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;