/*
    Quais ações meu carrinho pode fazer?
        - Adicionar item
        - Remover item
        - Deletar item do carrinho 
        - Calcular item
*/

async function addItem(userCart, item) {
    userCart.push(item)
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => {
        return item.name === name
    })

    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => {
        return p.name === item.name
    })

    if (indexFound == -1) {
        console.log('Item não encontrado')
        return
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        userCart[indexFound].subtotal = userCart[indexFound].price * userCart[indexFound].quantity
        return
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1)
        return
    }
} 

async function calculateTotal(userCart) {
    console.log('Shopee Cart TOTAL is: ')
    const result = userCart.reduce((total, item) => {
        total += item.subtotal
        return total
    }, 0)

    console.log(result)
}

async function displayCart (userCart) {
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal}`)
    })
}

export {
    deleteItem,
    calculateTotal,
    removeItem,
    addItem,
    displayCart
}