import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDTO } from './dto/create-report.dto';
import { debug } from 'console';

@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) { }

    /**
     * @description - Creates a new report
     * @param {object} res - response object served to the client
     * @param {object} body - request object containing the report request
     * description received from the client
     * @returns {json} report - new report created
     */
    @Post()
    async addReport(@Res() res, @Body() createReportDTO: CreateReportDTO) {
        const newReport = await this.reportsService.addReport(createReportDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Report has been created successfully!',
            report: newReport,
        });
    }
    /**
     * @description - Fetches all reports
     * @param {object} res - response object served to the client
     * @returns {json} reports - reports fetched
     */
    @Get()
    async queryOrGetReports(@Res() res, @Query('type') type) {
        const reports = await this.reportsService.queryOrGetReports(type);
        if (!reports) {
            throw new NotFoundException('Reports do not exist!');
        }
        return res.status(HttpStatus.OK).json(reports);
    }
    
    /**
     * @description - Fetches a report
     * @param {object} res - response object served to the client
     * @param {object} param - reportId
     * @returns {json} report - fetched report
     */
    @Get(':reportId')
    async getReport(@Res() res, @Param('reportId') reportId) {
        const report = await this.reportsService.getReport(reportId);
        if (!report) {
            throw new NotFoundException('Report does not exist!');
        }
        return res.status(HttpStatus.OK).json(report);
    }
}
