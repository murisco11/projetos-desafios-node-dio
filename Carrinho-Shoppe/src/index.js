import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const cart = []

console.log('Welcome to the your Shopee Cart!')

const item1 = await createItem('Hotwheels Ferrari', 20.99, 1)
const item2 = await createItem('Hotwheels Lamborghini', 39.99, 3)

await cartService.addItem(cart, item1)
await cartService.addItem(cart, item2)

await cartService.removeItem(cart, item2)

await cartService.displayCart(cart)
await cartService.calculateTotal(cart)