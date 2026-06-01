using products.management as db from '../db/schema';

service ProductsService {

    entity Products as projection on db.Products;

}