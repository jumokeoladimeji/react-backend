import { Report } from "src/reports/interfaces/reports.interface";

export class CreateCompanyDTO {
    readonly name: string;
    readonly address: string;
    readonly email: string;
    readonly description: string;
    readonly reports: Array<Report>;
}
