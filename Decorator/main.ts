import { ProductDecorator } from "./product/product-decorator";
import { TShirt } from "./product/t-shirt";

const tshirt = new TShirt();
const decoratedTShirt = new ProductDecorator(tshirt);
console.log(decoratedTShirt.getPrice());