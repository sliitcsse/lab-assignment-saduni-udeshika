const customers = new Map();
import {randomBytes} from 'crypto';

//Add customers
export const save = ({userName, password,UserType}) =>{
    const customer = {id: randomBytes(16).toString('hex'), userName, password, UserType, postDate: new Date()};
    customers.set(customer.id, customer);
    return customer;
};

//view customer list
export const getCustomerList = () =>{
    return [...customers.values()];
};
