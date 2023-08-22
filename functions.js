//this file holds all the functions for averagePrice.js and they will be exported to it 
//easiest way to keep everything organized

const isBargain = (inventoryItem) => {
    let returnValue = false

    if (inventoryItem.price < 50.00) {
        returnValue = true
    }

    return returnValue
}

const isClothing = (item) => {
    let returnValue = false

    if (item.type === "clothing") {
        returnValue = true
    }

    return returnValue
}

function isSurfboard(item) {
    let returnValue = false

    if (item.type === "surfboard") {
        returnValue = true
    }

    return returnValue
}

const isGear = (gear) => {
    let returnValue = false

    if (gear.type === "gear") {
        returnValue = true
    }

    return returnValue
}

const convertDataForAccounting = (product) => {
    const allUpperCase = `${product.description.toUpperCase()} - ${product.type.toUpperCase()} - ${product.price}`
    return allUpperCase
}

const calculateAveragePrice = (products) => {
    let total = 0 //Setting up to keep a running count of the totals
    let averagePrice = 0 // Setting up to hold average price eventually
    for (const product of products) {
        total = total += product.price
    //iterating the collection and adding price of each product to running total to calculate average
    }
    averagePrice = total / products.length
    return averagePrice
}
//shorthand syntax to exporting all the functions from averageprice.js
module.exports = {
    isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice
}