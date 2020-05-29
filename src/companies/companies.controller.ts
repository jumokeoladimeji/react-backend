import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDTO } from './dto/create-company.dto';

@Controller('companies')
export class CompaniesController {
    constructor(private companiesService: CompaniesService) { }
    
     /**
     * @description - Creates a new company
     * @param {object} res - response object served to the client
     * description received from the client
    * @param {object} body - request object containing the company request
     * @returns {json} company - new company created
     */
    @Post()
    async addCompany(@Res() res, @Body() createCompanyDTO: CreateCompanyDTO) {
        const newCompany = await this.companiesService.addCompany(createCompanyDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Company has been created successfully!',
            company: newCompany,
        });
    }
    /**
     * @description - Fetches all companies
    * @param {object} res - response object served to the client
     * @returns {json} companies - companies fetched
     */
    @Get()
    async getCompanies(@Res() res) {
        const company = await this.companiesService.getCompanies();
        if (!company) {
            throw new NotFoundException('Company does not exist!');
        }
        return res.status(HttpStatus.OK).json(company);
    }

    /**
     * @description - Fetches a company
     * @param {object} res - response object served to the client
     * @param {object} companyId
     * @returns {json} company - fetched company
     */
    @Get(':companyId')
    async getCompany(@Res() res, @Param('companyId') companyId) {
        const company = await this.companiesService.getCompany(companyId);
        if (!company) {
            throw new NotFoundException('Company does not exist!');
        }
        return res.status(HttpStatus.OK).json(company);
    }
}
