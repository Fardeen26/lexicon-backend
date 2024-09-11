import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5513;
import './db.js'
import express from 'express';
const app = express();
import cors from 'cors';
import bookRouter from './routes/route.js'


app.use(express.json());
app.use(cors({
    origin: process.env.FRONT_END_URL,
}))

app.use('/api/books', bookRouter);

app.listen(port, () => {
    console.log(`listening on ${port}`);
})