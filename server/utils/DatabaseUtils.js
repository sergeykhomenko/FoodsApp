import mongoose from 'mongoose';

import * as cfg from '../config.json';

import '../models/User';

const UserModel = mongoose.model('User');

export function setupConnection() {
    const dbFullHostname = `${cfg.db.protocol}://${cfg.db.login}:${cfg.db.password}@${cfg.db.host}`;
    mongoose.connect(`${dbFullHostname}/${cfg.db.databaseName}?retryWrites=true`);
}

export const User = {
    create : data => {
        const user = new UserModel({
            name: data.name,
            balance: 0
        });

        return user.save();
    },

    getUser: id => UserModel.findById(id),

    getUserList : () => UserModel.find()

};