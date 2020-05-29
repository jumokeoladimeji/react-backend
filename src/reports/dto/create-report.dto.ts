export class CreateReportDTO {
    readonly name: string;
    readonly type: string;
    readonly period: string;
    readonly year: number;
    readonly assignee: string;
    readonly deadline: Date;
    readonly submitted: boolean;
    readonly url: string;
}