import { Restaurant } from './restaurant.model';
import { Product } from './product.model';

export class Menu {
    id?: number;
    price?: number;
    availability?: boolean;

    restaurant_id?: number;
    product_id?: number;
}
