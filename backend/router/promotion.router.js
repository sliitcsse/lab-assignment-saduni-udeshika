import Router from '@koa/router'
import { savePromotions,getPromotions} from '../api/promotion.api.js';

const promotionRouter = new Router({
    prefix: '/promotions'
})

//add promotions
promotionRouter.post('/',ctx=>{
    const data = ctx.request.body;
    ctx.body = savePromotions(data)
    ctx.set('Content-type','application/json');
    ctx.status = 201;
})

//view promotions
promotionRouter.get('/allPromotion',(ctx)=>{
    ctx.body = getPromotions();
    ctx.set('Content-type','application/json');
    ctx.status = 200;
})

export default promotionRouter;
