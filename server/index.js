const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const PoemModel = require('./models/Poem');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://poems_user:poems_cow_414@poems.xutkv.mongodb.net/poems?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get('/poems', async (req, res) => {
    PoemModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }

        res.send(result)
    })
});

app.post('/insert', async (req, res) => {
    const poem = new PoemModel({ text: req.body.text, date: req.body.date, status: req.body.status, title: req.body.title });
    try {
        await poem.save();
        res.send('Poem created');
    } catch(err) {
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
