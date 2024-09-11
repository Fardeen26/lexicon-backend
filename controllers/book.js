import { Book } from '../models/book.js';


export const fetchBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books)
    } catch (error) {
        console.log("Error while fetching books", error);
        res.status(500).json({ message: "Error while fetching books" });
    }
}

export const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id)
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.log("Error while finding the book", error);
        res.status(500).json({ message: "Error while finding the book" });
    }
}

export const addBook = async (req, res) => {
    const { title, description, bookImage, bookPdfUrl, author } = req.body;

    try {
        const book = new Book({
            title,
            description,
            coverImage: bookImage,
            file: bookPdfUrl,
            author
        });

        await book.save();
        res.status(200).json({ success: true });
    } catch (error) {
        console.log("Error while adding the book", error)
        res.status(500).json({ success: false, message: "Error while adding the book" });
    }
}
