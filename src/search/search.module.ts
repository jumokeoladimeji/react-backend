import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// import { CompaniesService } from '../companies/companies.service';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { CompanySchema } from '../companies/schemas/companies.schema';

import { CompaniesModule } from '../companies/companies.module'

@Module({
    imports: [
        CompaniesModule
    ], 
    controllers: [SearchController],
    providers: [SearchService]
})
export class SearchModule {}
