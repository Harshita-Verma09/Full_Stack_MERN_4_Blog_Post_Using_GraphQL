const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post{
        id: ID!
        title:String!
        content: String!
        createdAt : String
    }
    type Query{
        getPosts: [Post]
        getPost(id: ID!): Post
    }
    type Mutation{
        createPost( title:String!, content:String!) : Post
        deletePost(id:ID!) :String
    }
`;
module.exports = typeDefs;