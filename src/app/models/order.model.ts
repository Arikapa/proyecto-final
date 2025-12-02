import { Customer } from './customer.model';
import { Menu } from './menu.model';

export class Order {
    id?: number;
    quantity?: number;
    total_price?: number;
    status?: string;

    customer_id?: number;
    menu_id?: number;
}
