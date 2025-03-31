const { readData } = require("../readWriteData");


function Namevalidetion(product_name){
    if(typeof product_name != String){
        return false
    }
    return true
}



function PriceVelidation(price){
    if(price < 0){
       return false
    }
    return true
}



function quantityVelidation(quantity){
    if(quantity < 0){
        return false;
    }
    return true
}


function deleteItem(id){
    const data = readData()
    for(let i = 0; i<data.length; i++){
        if(data[i].id == id){
            return false
        }
    }
    return true
}

module.exports = {Namevalidetion,PriceVelidation,quantityVelidation,deleteItem}