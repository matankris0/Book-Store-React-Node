import User from "../models/user.model.js";
import Cart from "../models/cart.model.js";

export const createUser = async (req, res) => {
    const userData = req.body;

    const user = new User(userData);

    const cart = new Cart({ownerID: user._id});
    try {
        const token = await user.generateAuthToken()

        await user.save();
        await cart.save();

        res.status(201).send({
            status: 201,
            statusText: 'Created',
            data: {
                user: user,
                token: token
            },
            message: 'User was created successfully'
        });
    }
    catch (err) {
        console.log(err)
        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: ''
        });
        console.log(err)
    };
};

export const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await User.findUserByEmailAndPassword(email, password)

        const token = await user.generateAuthToken()

        res.status(200).send({
            status: 200,
            statusText: 'Ok',
            data: {
                user: user,
                token: token
            },
            message: 'User logged in successfully'
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: ''
        });
    };
};

export const logout = async (req, res) => {
    const userID = req.user;
    const token = req.token;

    try {
        const user = await User.findById(userID);

        user.tokens = user.tokens.filter((tokens) => tokens.token !== token);
        await user.save();

        res.status(200).send({
            status: 200,
            statusText: 'Ok',
            data: {},
            message: 'User logged out successfully'
        })
    }
    catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: ''
        });
    };
};