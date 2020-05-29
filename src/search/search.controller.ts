import { Controller, Get,  Res, Query, HttpStatus, NotFoundException } from '@nestjs/common';
import { SearchService } from './search.service';
import { debug } from 'console';
import { CompaniesService } from 'src/companies/companies.service';

@Controller('search')
export class SearchController {
    constructor(private searchService: SearchService, private companiesService: CompaniesService) { }
       /**
     * @description - Searches companies
     * @param {object} res - response object served to the client
     * @returns {json} companies - companies fetched
     */
    @Get()
    async queryOrGetCompany(@Res() res, @Query('type') searchTerm) {
        const companies = await this.companiesService.queryOrGetCompanies(searchTerm);
        if (!companies) {
            throw new NotFoundException('Companies do not exist!');
        }
        return res.status(HttpStatus.OK).json(companies);
    }
    
}
