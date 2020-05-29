import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { ReportSchema } from './schemas/reports.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Report', schema: ReportSchema }]),
  ], 
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
