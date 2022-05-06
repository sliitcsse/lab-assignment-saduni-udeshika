const customers = new Map();
import {randomBytes} from 'crypto';

//Add customers
export const save = ({firstName, lastName, email, userType}) =>{
    const customer = {id: randomBytes(16).toString('hex'), firstName, lastName, email, userType, postDate: new Date()};
    customers.set(customer.id, customer);
    return customer;
};

//view customer list
export const getCustomerList = () =>{
    return [...customers.values()];
};
