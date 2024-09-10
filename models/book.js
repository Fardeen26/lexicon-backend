import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    description: String,
    coverImage: String,
    file: String,
    author: String,
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

