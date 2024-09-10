import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5513;
import './db.js'
import express from 'express';
const app = express();
import cors from 'cors';
import { Book } from './models/book.js'


app.use(express.json());
app.use(cors({
    origin: process.env.FRONT_END_URL,
}))

app.get('/api/books', async (req, res) => {
    const books = await Book.find({});
    res.json(books)
})

app.get('/api/books/:id', async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id)
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});


app.post('/api/books/add', async (req, res) => {
    const { title, description, bookImage, bookPdfUrl, author } = req.body;

    try {
        const book = new Book({
            title,
            description,
            coverImage: bookImage,
            file: bookPdfUrl,
            author
        });

        const savedBook = await book.save();
        console.log(savedBook);
        res.status(200).json({ success: true });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false });
    }

})

app.listen(port, () => {
    console.log(`listening on ${port}`);
})