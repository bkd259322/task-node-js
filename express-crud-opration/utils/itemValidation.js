const {readData} = require("../readWriteData");


function nameValidation(product_name){
    if(typeof product_name !== "string" || product_name.trim() === ""){
        return false
    }
    return true
}

function priceValidation(price){
    if(typeof price !== "number" || price<0){
        return false
    }
    return true
}

function quantityValidation(quantity){
    if(typeof quantity !== "number" || quantity<0){
        return false;
    }
    return true
}


function deleteItem(id){
    const data = readData();
    return !data.some(item => item.id === id);
}

module.exports={
    nameValidation,
    priceValidation,
    quantityValidation,
    deleteItem
};
