
// const username="vikhyath";
// const greeting=`Hello ${username}`;
// console.log(greeting);

const username="Vicky";
const greeting=`Hello ${username}! Welcome to Alvas Training Programe`;
console.log(greeting);

const item="Apple";
const qty=5;
const pricePerItem=25;
const totalPrice=`You brought  ${qty}  ${item}s for ${pricePerItem} and your total price is ${qty*pricePerItem}`
console.log(totalPrice);

//tagged template lliterals
function formatCurrency(strings, amount) {
    const formattedAmount = `$${parseFloat(amount).toFixed(2)}`;
    return `${strings[0]} ${formattedAmount}`;
}

const price = 45.6789;
const message = formatCurrency`The price is ${price}`;

console.log(message);
