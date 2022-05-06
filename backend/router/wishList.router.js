import Router from '@koa/router';
import {getWishList, saveListItem} from "../api/whishList.api.js";
const wishListRouter = new Router({
    prefix: '/wishlist'
});

wishListRouter.post('/', (ctx) =>{
    const data =  ctx.request.body;
    ctx.body = saveListItem(data);
    ctx.set('content-type', 'application/json');
    ctx.status = 201;
})


wishListRouter.get('/',(ctx)=>{
    ctx.body = getWishList();
    ctx.set('Content-type','application/json');
    ctx.status = 200;
});
export default  wishListRouter;
