import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import userRouter from "./router/customerProfile.router.js";
import traderRouter from "./router/traderProfile.router.js";
import inventoryRouter from "./router/inventry.router.js";
import promotionRouter from "./router/promotion.router.js";
import paymentRouter from "./router/payment.router.js";

const app = new Koa();
//app.use(cors());
app.use(bodyParser());

app.use(userRouter.routes())
    .use(userRouter.allowedMethods())
app.use(traderRouter.routes())
    .use(traderRouter.allowedMethods())
app.use(inventoryRouter.routes())
    .use(inventoryRouter.allowedMethods())
app.use(promotionRouter.routes())
    .use(promotionRouter.allowedMethods())
app.use(paymentRouter.routes())
    .use(paymentRouter.allowedMethods())

app.listen(5000, ()=>{
  console.log('Application running on port 5000');
});
