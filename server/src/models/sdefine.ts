import { DataTypes, DATE, Model, Optional, STRING } from "sequelize";
import { db } from "../db";


interface IDefine {

    id?: number;
    deptname: string,
    ddo: string,
    pdescription: string,
    pcode: string,
    assaccount: string,
    costcenter: string,
    grantno: string,
    office: string,
    createdon: Date,

}

interface IDefineCreate extends Optional<IDefine, 'id' | 'deptname' | 'ddo' | 'pdescription' | 'pcode' | 'assaccount' | 'costcenter' | 'grantno' | 'office' | 'createdon'> { }

interface IDefineModel extends Model<IDefine, IDefineCreate> { }

export const Sdefine = db.define<IDefineModel>('sdefination', {
    id: {
        type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true
    },
    deptname: {
        type: STRING
    },
    ddo: {
        type: STRING
    },
    pdescription: {
        type: STRING
    },
    pcode: {
        type: STRING
    },
    assaccount: {
        type: STRING
    },
    costcenter: {
        type: STRING
    },
    grantno: {
        type: STRING
    },
    office: {
        type: STRING
    },
    createdon: {
        type: DATE
    },


}, {
    timestamps: false
}  // { sequelize: db, modelName: 'User' }
);