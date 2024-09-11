import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);
export { Book };

