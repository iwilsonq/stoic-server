import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';
const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stoic');

app.use(express.static('public'));

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(PORT, console.log('Listening at http://localhost:' + PORT));
