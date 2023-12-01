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

main().catch(err => console.log(err));//catch error

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.2qikblf.mongodb.net/DB14?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//this is how you create a a Schema
const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
})
//add to the bookSchema
const bookModel = mongoose.model('my_books', bookSchema);

//server logic for delete -- params of the url
app.delete('/api/book/:id', async (req, res)=>{
    console.log("Delete: "+ req.params.id)
    //local variable book - everytime you want to interact with the database you use the book model
    let book = await bookModel.findByIdAndDelete(req.params.id);
    res.send(book);//async so wont proceed to this line until the previous one is finished
})

//method for updated the details of the book - async to make sure book is not null
app.put('/api/book/:id', async(req, res)=>{
    console.log("update: "+req.params.id);

    let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(book);//send back updated book
})

app.post('/api/book', (req, res) => {
    console.log(req.body);

    bookModel.create({//this is how you create a bookModel
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    })
        .then(() => { res.send("Data Recieved") })
        .catch(() => { res.send("Data NOT Recieved")});//if error is cought

})

//get all the books
app.get('/api/books', async(req, res) => {
    
    let books = await bookModel.find({});
    res.json(books);
   
})
//get the book with a specific id
app.get('/api/book/:identifier',async(req,res)=>{
    console.log(req.params.identifier);

    let book = await bookModel.findById(req.params.identifier);//make it wait for the information

    res.send(book);//the response is the book
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})