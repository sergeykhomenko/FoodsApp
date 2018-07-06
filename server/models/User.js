import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String },
    balance: { type: Number }
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);
