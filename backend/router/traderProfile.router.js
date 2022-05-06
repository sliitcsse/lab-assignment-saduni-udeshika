import Router from '@koa/router';
import {get, save} from '../api/trader.api.js';

const traderRouter = new Router({
    prefix: '/traders'
});

//Add traders
traderRouter.post('/',(ctx)=>{
    const data =  ctx.request.body;
    ctx.body = save(data);
    ctx.set('content-type', 'application/json');
    ctx.status = 201;
});

//view trader
traderRouter.get('/:id',(ctx)=>{
    const id =  ctx.params.id;
    ctx.body = get(id);
    ctx.set('content-type', 'application/json');
    ctx.status = 200;
});
export default  traderRouter;
