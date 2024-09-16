//spread operations

const electronics=['laptop','smartphone','smartwatch'];
const groceries=['milk','Egg','Bread'];

const shoppingcart=[...electronics,...groceries];
console.log(shoppingcart);

//rest operator
function addTasks(...tasks){
    console.log(tasks);

}
addTasks('BuyGroceries','CleanRoom','Pay bills');
