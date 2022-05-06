const traders = new Map();
import {randomBytes} from 'crypto';

export const save = ({firstName, lastName, email, userType}) => {
  const trader = {id: randomBytes(16).toString('hex'), firstName, lastName, email, userType, postDate: new Date()};
  traders.set(trader.id, trader);
  return trader;
};

export const get = (id) =>{
    const trader = traders.get(id);
    if(!id){
        throw new Error(`Id is not fount ${id}`)
    }
    return trader;
};
