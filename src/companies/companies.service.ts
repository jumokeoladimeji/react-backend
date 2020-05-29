import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './interfaces/company.interface';
import { CreateCompanyDTO } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
    constructor(@InjectModel('Company') private readonly companyModel: Model<Company>) { }

    /**
     * @description - Creates a new company
     * @param {createCompanyDTO} createCompanyDTO - request object containing the company request
     * description received from the client
     * @returns {promise} company - new company created
     */
    async addCompany(createCompanyDTO: CreateCompanyDTO): Promise<Company> {
        const newCompany = await this.companyModel(createCompanyDTO);
        return newCompany.save();
    }  
    /**
     * @description - Fetches a company
     * @param {object} companyID - companyID
     * @returns {promise} company - fetched company
     */
    async getCompany(companyID): Promise<Company> {
        const company = await this.companyModel
            .findById(companyID).populate('reports')
            .exec();
        return company;
    }
     /**
     * @description - Fetches all companies from the database
     * @returns {promise} companies - companies fetched
     */
    async getCompanies(): Promise<Company[]> {
        const companies = await this.companyModel.find().populate('reports').exec();
        return companies;
    }

    /**
     * @description - edits a company
     * @param {object} companyID - companyID
     * @param {object} createCompanyDTO - createCompanyDTO
     * @returns {promise} company - edited company
     */
    async editCompany(companyID, createCompanyDTO: CreateCompanyDTO): Promise<Company> {
        const editedCompany = await this.companyModel
           .findByIdAndUpdate(companyID, createCompanyDTO, { new: true });
        return editedCompany;
    }
    
    /**
     * @description - deletes a company
     * @param {ObejctId} companyID - request object received from the client
     * @returns {promise}
     */
    async deleteCompany(companyID): Promise<any> {
        const deletedCompany = await this.companyModel
            .findByIdAndRemove(companyID);
        return deletedCompany;
    }

    async queryOrGetCompanies(searchTerm): Promise<Company[]> {
        const filter = {text: searchTerm}
        const companies = await this.companyModel.find(filter).populate('reports').exec();
        return companies;
    }
}
