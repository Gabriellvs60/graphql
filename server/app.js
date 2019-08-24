const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://astolfo:1234@cluster0-i9cmz.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connection.once('open',() => {
    console.log('connected to database');
})

const app = express();

app.use('/graphql', graphqlHTTP({
schema,
graphiql: true
}));

app.listen(4000, () => {
    console.log('Is Running');
});

