import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import MONGODB from "./config.js"
import Post from './models/Post.js'
import typeDefs from "./graphql/typeDefs.js";

const resolvers = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find()
                return posts
            } catch (error) {
                throw new Error(err)
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, { useNewUrlParser: true })

server.listen({ port: 5000 }).then(res => {
    console.log(`Server running at ${res.url}`)
})