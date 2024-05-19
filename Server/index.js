const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const BookModel = require('./Models/Book')

const app = express();
app.use(cors());
app.use(express.json());

// create connection with database
mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/get', (req, res) => {
    BookModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const title = req.body.title;
    BookModel.create({
        title : title
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res)=> {
    const {id} = req.params;
    BookModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// starting the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});