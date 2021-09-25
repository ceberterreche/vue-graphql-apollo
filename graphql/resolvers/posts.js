import Post from '../../models/Post.js'

const postsResolver = {
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

export default postsResolver