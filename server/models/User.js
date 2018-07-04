import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email : { type: String, required: true },
    name: { type: String },
    balance: { type: Number }
});

const User = mongoose.model('User', UserSchema);
