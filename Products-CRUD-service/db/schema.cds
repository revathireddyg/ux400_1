namespace products.management;

entity Products {

    key itemId : Integer;
    description   : String(500);
    quantity     : Integer;
    price      : Decimal(9,2);

}