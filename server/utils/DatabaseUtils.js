import mongoose from 'mongoose';

import * as cfg from '../config.json';

import '../models/User';

const User = mongoose.model('User');

export function setupConnection() {
    const dbFullHostname = `${cfg.db.protocol}://${cfg.db.login}:${cfg.db.password}@${cfg.db.host}`;
    mongoose.connect(`${dbFullHostname}/${cfg.db.databaseName}?retryWrites=true`);
}

export function listUsers() {
    return User.find();
}

export function createUser(data) {
    const user = new User({
        name: data.name,
        balance: 0
    });

    return user.save();
}

export function deleteUser(id) {
    return User.findById(id).remove();
}