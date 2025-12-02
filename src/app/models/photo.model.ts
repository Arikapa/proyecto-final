import { Issue } from './issue.model';

export class Photo {
    id?: number;
    image_url?: string;
    caption?: string;
    taken_at?: Date;

    issue_id?: number; // Relación con Issue
}
