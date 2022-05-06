const payments = new Map();
import {randomBytes} from 'crypto';

//Add payment
export const savePayment = ({name, cardNumber, cvc, description}) => {
    const payment = {id: randomBytes(16).toString('hex'), name,cardNumber,cvc, description, date: new Date()};
    payments.set(payment.id, payment);
    return payment;
};
