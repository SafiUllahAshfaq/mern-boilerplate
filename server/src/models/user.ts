import { DataTypes, Model, Optional, STRING } from "sequelize";
import { db } from "../db";


interface IUser {
    id?: number,
    fullName: string,
    email: string,
    password: string,
    resetToken: string,
    resetTokenExpiry: string

}

interface IUserCreate extends Optional<IUser, 'id' | 'email' | 'resetToken' | 'resetTokenExpiry'> { }

interface IUserModel extends Model<IUser, IUserCreate> { }

export const User = db.define<IUserModel>('user', {
    id: {
        type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true
    },
    fullName: {
        type: STRING
    },
    email: {
        type: STRING,
        defaultValue: Math.random().toString()
    },
    password: {
        type: STRING
    },
    resetToken: {
        type: STRING
    },
    resetTokenExpiry: {
        type: STRING
    },

},

    // { sequelize: db, modelName: 'User' }
)