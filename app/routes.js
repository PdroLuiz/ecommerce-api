const {Router} = require('express');
const usercontroller = require('./controllers/usercontroller');
const productcontroller = require('./controllers/productcontroller');
const auth = require("./middlewares/auth");
const routes = Router();

routes.use('/user', Router()
.get('/info', auth, usercontroller.info)
.post('/create', usercontroller.signup)
.post('/session', usercontroller.signin)
.post('/changepassword', auth, usercontroller.changePassword)
.post('/logout', auth, usercontroller.logout)
);

routes.use('/product', auth, Router()
.get('/info/:id', productcontroller.info)
.get('/list', productcontroller.list)
.post('/create', productcontroller.create)
.post('/modify/:id', productcontroller.modify)
.delete('/delete/:id', productcontroller.delete)
);


module.exports = routes;