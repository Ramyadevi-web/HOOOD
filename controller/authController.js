const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        console.log(`Something went wrong ${error}`)
    }
}

const getUserById = async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        console.log(`Something went wrong ${error}`)
    }
}

const getUserInfo = async (req,res) => {
    try {
        const {user} = req;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createUser = async (req,res) => {
    try {
        const {email} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).send('User already exists');
        }
        
        const users = await User.create(req.body);
        res.status(201).json(users)
    } catch (error) {
        console.log(`Something went wrong ${error}`)
    }
}

const deleteUser = async (req,res) => {
    try {
        const deletedUser = await User.findByIdAndDelete({_id: req.params.id});
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateUser = async (req,res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const loginUser = async (req,res) => {
    let {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user){
           return res.status(400).send('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign(
            {id: user._id}, 
            process.env.JWT_SECRET, 
            {expiresIn: process.env.JWT_EXPIRES_IN}
        );

        res.status(200).json({token,user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    loginUser,
    getUserInfo
}
