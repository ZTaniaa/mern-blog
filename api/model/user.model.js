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
        default: "https://www.bing.com/images/search?view=detailV2&ccid=3IsXMskZ&id=CA72CA480B05CFF44994061C8EF5E4D3942BE9A8&thid=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&mediaurl=https%3a%2f%2fwww.kindpng.com%2fpicc%2fm%2f24-248253_user-profile-default-image-png-clipart-png-download.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.dc8b1732c919ca17845aab44dc3afb27%3frik%3dqOkrlNPk9Y4cBg%26pid%3dImgRaw%26r%3d0&exph=752&expw=860&q=profile+img&simid=608055043595137408&FORM=IRPRST&ck=7AED6B28F1AD03FDFE74609E9B14A469&selectedIndex=8&itb=0&PC=NMTS",
    },
    }, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;