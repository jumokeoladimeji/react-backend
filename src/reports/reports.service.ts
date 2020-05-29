import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Report } from './interfaces/reports.interface';
import { CreateReportDTO } from './dto/create-report.dto';
import { debug } from 'console';

@Injectable()
export class ReportsService {
    constructor(@InjectModel('Report') private readonly reportModel: Model<Report>) { }

    async addReport(createReportDTO: CreateReportDTO): Promise<Report> {
        const newReport = await this.reportModel(createReportDTO);
        return newReport.save();
    }  
    
    async getReport(reportID): Promise<Report> {
        const report = await this.reportModel
            .findById(reportID)
            .exec();
        return report;
    }

    async queryOrGetReports(type): Promise<Report[]> {
        const filter = type ? { type } : {};
        const reports = await this.reportModel.find(filter).exec();
        return reports;
    }


    async editReport(reportID, createReportDTO: CreateReportDTO): Promise<Report> {
        const editedReport = await this.reportModel
           .findByIdAndUpdate(reportID, createReportDTO, { new: true });
        return editedReport;
    }
    
    async deleteReport(reportID): Promise<any> {
        const deletedReport = await this.reportModel
            .findByIdAndRemove(reportID);
        return deletedReport;
    }
}
