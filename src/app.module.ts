import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { CompaniesModule } from './companies/companies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchService } from './search/search.service';
import { SearchController } from './search/search.controller';
import { SearchModule } from './search/search.module';
import { CompaniesService } from './companies/companies.service';

@Module({
  imports: [
    ReportsModule, 
    CompaniesModule,
    MongooseModule.forRoot(process.env.MONGOLAB_URI, { 
      useNewUrlParser: true,
      useCreateIndex: true
    }),
    SearchModule,
  ],
  controllers: [AppController, SearchController],
  providers: [AppService, SearchService],
})
export class AppModule {}
