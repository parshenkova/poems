const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PoemModel = require('./models/Poem');

app.use(express.json());

mongoose.connect('mongodb+srv://poems_user:poems_cow_414@poems.xutkv.mongodb.net/poems?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get('/', async (req, res) => {
    const poem = new PoemModel({
        date: '12-09-2020',
        text: 'Наша Таня громко плачет, уронила в речку мячик. Тише, Танечка, не плач, не утонет в речке мяч.',
        status: 1,
    });

    try {
        await poem.save();
        res.send('data inserted');
    } catch(err) {
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
