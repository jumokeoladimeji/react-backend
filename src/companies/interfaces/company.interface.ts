import { Document } from 'mongoose';
import { Report } from 'src/reports/interfaces/reports.interface';

export interface Company extends Document {
    readonly name: string;
    readonly address: string;
    readonly email: string;
    readonly description: string;
    readonly reports: Array<Report>;
}