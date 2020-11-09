const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: String, required: true },
  description: { type: String, required: true},
  img: 
  { 
      data: Buffer, 
      contentType: String 
  },
  link: { type: String, required: true},
  title: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

//Referenced:
//https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/