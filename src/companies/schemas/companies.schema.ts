/* eslint-disable @typescript-eslint/camelcase */
import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    description: String,
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report'}]
},
{ timestamps: true });