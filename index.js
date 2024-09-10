import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}))

const book = [
    {
        _id: 1,
        title: 'Thinking Fast and Slow',
        description: 'A book on thinking',
        coverImage: "https://m.media-amazon.com/images/I/41ALfsawZDL._SY445_SX342_.jpg",
        file: 'https://github.com/rajeevranjancom/Motivational_Books/blob/master/Thinking%2C%20Fast%20and%20Slow%20by%20Daniel%20Kahneman%20(z-lib.org).pdf',
        author: 'Daniel Kahneman',
    },
    {
        _id: 2,
        title: 'The Subtle Art of Not Giving a Fuck',
        description: 'A book on thinking',
        coverImage: "https://m.media-amazon.com/images/I/71t4GuxLCuL._SY466_.jpg",
        file: 'https://github.com/rajeevranjancom/Motivational_Books/blob/master/The%20Subtle%20Art%20of%20Not%20Giving%20a%20Fuck%20by%20Mark%20Manson%20(z-lib.org).pdf',
        author: 'Mark Manson',
    },
    {
        _id: 3,
        title: 'How to Win Friends and Influence People',
        description: 'A book on people',
        coverImage: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._SY466_.jpg",
        file: 'https://www.scribd.com/document/715592134/How-to-Win-Friends-and-Influence-People-by-Dale-Carnegie',
        author: 'Dale Carnegie',
    },
    {
        _id: 3,
        title: 'Think and Grow Rich',
        description: 'A Book on Money',
        coverImage: "https://m.media-amazon.com/images/I/41BooQjbMZL._SY445_SX342_.jpg",
        file: 'https://www.scribd.com/document/715592134/How-to-Win-Friends-and-Influence-People-by-Dale-Carnegie',
        author: 'Napoleon Hill',
    }
]

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