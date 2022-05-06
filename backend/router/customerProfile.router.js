import Router from '@koa/router';
import { getCustomerList, save} from '../api/customerProfile.api.js';

const userRouter = new Router({
    prefix: '/customers'
});
userRouter.post('/',(ctx)=>{
    const data =  ctx.request.body;
    ctx.body = save(data);
    ctx.set('content-type', 'application/json');
    ctx.status = 201;
});

userRouter.get('/allProfile',(ctx)=>{
    ctx.body = getCustomerList();
    ctx.set('Content-type','application/json');
    ctx.status = 200;
});

export default userRouter;
