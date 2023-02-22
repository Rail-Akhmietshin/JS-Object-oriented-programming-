export class Product {

    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    getInfo(products) {
        let regExp = new RegExp(/(?<name>(contains|starts)+)-fd&price-(?<price>([\>\<])?([\=])?)\d+&quantity-(?<quantity>([\>\<])?([\=])?)\d+&description-(?<description>(ends)+)-abc/);
        try {
            return Object.values(products.match(regExp).groups);
        }
        catch {
            return "Неправильно введенные данные" 
        }
    }
}

let instance1 = new Product("GTX 1080", 400, 23, "10th GEN");
let instance2 = new Product("RTX 2080", 600, 40, "20th GEN");
let instance3 = new Product("RTX 3090", 900, 51, "30th GEN");
let instance4 = new Product("RTX 4090", 1200, 103, "40th GEN");

let cls = [instance1, instance2, instance3, instance4];

// "name-contains-fd&price-=>2&quantity->5&description-ends-abc"

console.log(instance1.getInfo("name-contains-fd&price->=2&quantity-<=5&description-ends-abc"));


