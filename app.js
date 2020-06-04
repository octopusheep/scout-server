const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const router = require('koa-router')();
const app = new Koa();

var cors = require('koa2-cors');

//允许跨域
app.use(cors());

// parse request body:
app.use(bodyParser());

// add controller:
app.use(router.routes());
app.use(controller());

app.listen(3003);
console.log('app started at port 3003...');




