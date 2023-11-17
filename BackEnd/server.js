const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
//need to install cors to bypass the errors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//parse the body of a http request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//localhost:4000
app.get('/', (req, res) => {
    res.send('hello world')
})

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.2qikblf.mongodb.net/DB14?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
})
//add to the bookSchema
const bookModel = mongoose.model('my_books', bookSchema);

app.post('/api/book', (req, res) => {
    console.log(req.body);

    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    })
        .then(() => { res.send("Data Recieved") })
        .catch(() => { res.send("Data NOT Recieved")});

})

//get all the books
app.get('/api/books', async(req, res) => {
    
    let books = await bookModel.find({});
    res.json(books);
   
})
//get the book with a specific id
app.get('/api/book/:identifier',async(req,res)=>{
    console.log(req.params.identifier);

    let book = await bookModel.findById(req.params.identifier);

    res.send(book);
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})