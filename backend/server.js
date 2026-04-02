
require("dotenv").config();

const express = require('express');
const cors = require("cors"); // 👈 ADD THIS
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/db');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');


async function startServer() {
    console.log("🚀 Starting server...");

    const app = express();

    app.use(cors());
    console.log("✅ CORS enabled");

    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    console.log("✅ Apollo Server started");

    server.applyMiddleware({ app });
    console.log("✅ Middleware applied");

    console.log("🔌 Connecting to DB...");
    connectDB();

    app.listen(4000, () => {
        console.log("🔥 Server running at http://localhost:4000/graphql");
    });
}

startServer();
