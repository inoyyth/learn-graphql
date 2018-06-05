var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// construct a schema, using graphql schema language
var schema = buildSchema(`
    type Query {
        hello: String
        coba: String
    }
`);

// The root provide a resolver function for each API endpoint
var root = {
    hello: ()=> {
        return 'Hello world';
    },
    coba: ()=> {
        return 'Coba Ajah';
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a Graphql API server at localhost:4000/graphql');