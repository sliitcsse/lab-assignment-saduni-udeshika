import {randomBytes} from "crypto";
const promotions = new Map();

export const savePromotions = ({item,promotionType,discount})=> {
    const promotion = {id:randomBytes(16).toString('hex'),item,promotionType,discount}
    promotions.set(promotion.id,promotion);
    return promotion;
}

export const getPromotions = ()=> {
    return [...promotions.values()];
}
