import mongoose from 'mongoose';
import Article from './models/article';

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    subtitle: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLString },
    imageId: { type: GraphQLString },
    caption: { type: GraphQLString },
    content: { type: GraphQLString }
  })
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({

  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    article: {
      type: ArticleType,
      args: { id: { type: GraphQLString }},
      resolve(parentValue, args) {
        console.log(args);
        return Article.findOne({ _id: args.id }, (err, article) => {
          if (err) res.send(err);
          return article;
        });
      }
    }
  }
});

const Schema = new GraphQLSchema({
  query: RootQuery
});

export default Schema;
