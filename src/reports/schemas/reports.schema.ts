/* eslint-disable @typescript-eslint/camelcase */
import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
    name: String,
    type: String,
    period: String,
    year: Number,
    assignee: String,
    deadline: Date,
    submitted: Boolean,
    url: String
},
{ timestamps: true });

ReportSchema.index({type: 'text', year: 'text', company:'text'});
