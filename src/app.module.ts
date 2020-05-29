import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { CompaniesModule } from './companies/companies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ReportsModule, 
    CompaniesModule,
    MongooseModule.forRoot(process.env.MONGOLAB_URI, { 
      useNewUrlParser: true,
      useCreateIndex: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
