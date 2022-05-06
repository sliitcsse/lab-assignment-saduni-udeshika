import Router from '@koa/router';
import {getItem, getItems, saveItems, updateItem} from '../api/inventry.api.js';

const inventoryRouter = new Router({
    prefix: '/items'
});

//post items
inventoryRouter.post('/',(ctx)=>{
    const data =  ctx.request.body;
    ctx.body = saveItems(data);
    ctx.set('content-type', 'application/json');
    ctx.status = 201;
});
//get item
inventoryRouter.get('/:id',(ctx)=>{
    const id =  ctx.params.id;
    ctx.body = getItem(id);
    ctx.set('content-type', 'application/json');
    ctx.status = 200;
});
//update item
inventoryRouter.put('/:itemId',(ctx)=>{
    const itemId =  ctx.params.itemId;
    ctx.body = updateItem(itemId,ctx.request.body);
    ctx.set('content-type', 'application/json');
    ctx.status = 201;
});

//get items
inventoryRouter.get('/allitems',(ctx)=>{
    ctx.body = getItems();
    ctx.set('Content-type','application/json');
    ctx.status = 200;
});
export default inventoryRouter;
