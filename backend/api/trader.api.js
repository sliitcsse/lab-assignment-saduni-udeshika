const traders = new Map();
import {randomBytes} from 'crypto';

export const save = ({userName, password, UserType}) => {
  const trader = {id: randomBytes(16).toString('hex'), userName, password, UserType, postDate: new Date()};
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
