import postsResolver from "./posts.js";

const resolvers = {
    Query: {
        ...postsResolver.Query
    }
}

export default resolvers