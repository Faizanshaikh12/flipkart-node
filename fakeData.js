import Product from "./models/Products.js";
import {products} from "./constants/products.js";

export const fakeData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('Default Data Successfully');
    } catch (err) {
        console.log(err);
    }
}
