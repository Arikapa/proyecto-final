import { Motorcycle } from './motorcycle.model';

export class Issue {
    id?: number;
    description?: string;
    issue_type?: string;
    date_reported?: Date;
    status?: string;

    motorcycle_id?: number; // Relación con Motorcycle
}
