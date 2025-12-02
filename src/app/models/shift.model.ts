import { Motorcycle } from './motorcycle.model';
import { Driver } from './driver.model';    

export class Shift {
    id?: number;
    start_time?: Date;
    end_time?: Date;
    status?: string;

    driver_id?: number;       // Relación con Driver
    motorcycle_id?: number;   // Relación con Motorcycle
}
