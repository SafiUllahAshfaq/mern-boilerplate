import { DataTypes, DATE, Model, Optional, STRING } from "sequelize";
import { db } from "../db";


interface ISubmit {

    id?: Number,
    chqno: String,
    amount: String,
    payeename: String,
    paymenthead: String,
    objectcode: String,
    project: String,
    phead: String,
    poffice: String,
    createdon: Date,
    sno: String,


}

interface ISubmitCreate extends Optional<ISubmit, 'id' | 'chqno' | 'amount' | 'payeename' | 'paymenthead' | 'objectcode' | 'project' | 'phead' | 'poffice' | 'createdon' | 'sno'> { }

interface ISubmitModel extends Model<ISubmit, ISubmitCreate> { }

export const SubmitSchedule = db.define<ISubmitModel>('createschedules', {
    id: {
        type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true
    },

    chqno: {
        type: STRING
    },
    amount: {
        type: STRING
    },
    payeename: {
        type: STRING
    },
    paymenthead: {
        type: STRING
    },
    objectcode: {
        type: STRING
    },
    project: {
        type: STRING
    },
    phead: {
        type: STRING
    },
    poffice: {
        type: STRING
    },
    createdon: {
        type: DATE
    },
    sno: {
        type: STRING
    },


}, {
    timestamps: false
}  // { sequelize: db, modelName: 'User' }
);