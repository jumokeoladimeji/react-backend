import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [ReportsModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
