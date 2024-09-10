import book from './booksData.js'
import { Book } from '../models/book.js'
import '../db.js'

const initDB = async () => {
    await Book.insertMany(book);
    console.log("Data was initialized");
}

initDB(); 