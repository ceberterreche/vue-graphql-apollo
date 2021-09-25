import { model, Schema } from 'mongoose'

const userShema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String
})

export default model('User', userShema)