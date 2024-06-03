import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdefault-profile-picture&psig=AOvVaw3ciu8lAvhDn5TsX99WdHwl&ust=1717497679504000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjtw8ufv4YDFQAAAAAdAAAAABAE",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
    }, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;