
const Post = require('../models/Post');
const resolvers = {
    Query: {
        getPosts: async () => await Post.find(),
        getPost: async (__, { id }) => await Post.findById(id)
    },

    Mutation: {
        createPost: async (_, { title, content }) => {
            const post = new Post({ title, content });
            return await post.save();

        },
        deletePost: async (_, { id }) => {
            await Post.findByIdAndDelete(id);
            return 'Post deleted Successfully';
        }
    }
};
module.exports = resolvers;