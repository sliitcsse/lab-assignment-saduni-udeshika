import {randomBytes} from 'crypto';
const items = new Map();

//post items
export const saveItems = (itemName, price, )=>{
    const item = {itemId: randomBytes(16).toString('hex'), itemName, price};
    items.set(item.itemId, item);
    return item;
}

//get one item
export const getItem = (itemId) =>{
    const item = items.get(itemId);
    if(!itemId){
        throw new Error(`Id is not fount ${itemId}`)
    }
    return item;
}

//get items
export const getItems = () =>{
    return [...items.values()];
};
//update item
export const updateItem = (itemId,{itemName,price}) => {
    if (!items.has(itemId)) {
        throw new Error(`${itemId} not found`)
    }
    const item = { itemId, itemName, price}
    items.set(item.itemId, item);
    return item;
}
