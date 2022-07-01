import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import environments from "../../config/environments.js";

const userScheme = new mongoose.Schema(
    {
    firstName: {
        type: String,
        lowercase: true,
        required: [true,'First name is required'],
        trim:true,
    },
    lastName: {
        type: String,
        lowercase: true,
        required: [true,'Last name is required'],
        trim:true,
    },
    email: {
        type: String,
        lowercase: true,
        required: [true,'Email is required'],
        unique: [true, 'Email is already taken'],
        trim:true,
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        trim:true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    },
)

userScheme.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});
userScheme.methods.generateAuthToken = async function () {
    const user = this;

    const token = jwt.sign(
        {_id: user.id},
        environments.TOKEN_SECRET
        );

        user.tokens.push({ token: token });

        await user.save();

        return token;
};

userScheme.methods.toJSON = function () {
    const user = this;

    const userObj = user.toObject();
    delete userObj.__v;
    delete userObj.tokens;

    return userObj;
}

userScheme.statics.findUserByEmailAndPassword = async (email, password) => {
    const user = await User.findOne({email: email});
    if (!user) throw new Error('Unable to login');

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) throw new Error('Unable to login');

    return user;
};

userScheme.virtual('cart', {
    ref: 'Cart',
    localField: '_id',
    foreignField: 'ownerID'
})

const User = mongoose.model('User', userScheme);

export default User