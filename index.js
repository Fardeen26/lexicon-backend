import dotenv from "dotenv";
dotenv.config();
import './db.js'
import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.get('/api/books', (req, res) => {
    res.json(book)
})

app.get('/api/books/:id', (req, res) => {
    const { id } = req.params;
    const bookId = parseInt(id);
    const bookFound = book.find(b => b._id === bookId)
    if (bookFound) {
        res.json(bookFound);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.listen(5513, () => {
    console.log('listening on 5513');
})