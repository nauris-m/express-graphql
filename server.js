const express = require('express');
const schema = require('./src/schema.js');
const graphqlHTTP = require('express-graphql');

let port = 3000;
const app = express();
app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port);
console.log('GraphQL API server running at localhost:' + port);