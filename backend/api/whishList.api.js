const lists = new Map();
import {randomBytes} from 'crypto';

//Add to wishList
export const saveListItem = ({itemName, price}) =>{
    const listItem = {id: randomBytes(16).toString('hex'), itemName, price};
    lists.set(listItem.id, listItem);
    return listItem;
};
//View wishList

export const  getWishList= (id) =>{
    const listItem = lists.get(id);
    if(!id){
        throw new Error(`Id is not fount ${id}`)
    }
    return listItem;
}
