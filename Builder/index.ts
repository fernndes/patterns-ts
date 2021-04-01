// import { MealBox } from './classes/meal-box';
// import { Beans, Meat, Rice } from './classes/meals';

// const rice = new Rice('Arroz', 5);
// const beans = new Beans('Feijão', 10);
// const meat = new Meat('Carne', 20);

// const mealBox = new MealBox();
// mealBox.add(rice, beans, meat);
// console.log(mealBox.getPrice());

import { MainBuilder } from "./classes/main-builder";


const mainDishBuilder = new MainBuilder();

mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());

mainDishBuilder.reset();