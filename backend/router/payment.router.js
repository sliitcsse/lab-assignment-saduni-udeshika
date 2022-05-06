import Router from '@koa/router';
import {savePayment} from '../api/payment.api.js';

const paymentRouter = new Router({
    prefix: '/payment'
});

paymentRouter.post('/', (ctx) => {
    const data = ctx.request.body;
    ctx.body = savePayment(data);
    ctx.set('content-type', 'application/json');
    ctx.status = 201;
})

export default paymentRouter;
