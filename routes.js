const Express = require('express');
const blogController = require('./controllers/blog.con');
const blogRouter = Express.Router();
blogRouter.post('/',blogController.create)
blogRouter.get('/',blogController.getAllBlog)
const Routes = (app)=>{
    app.use('/blog',blogRouter)
}









module.exports = Routes;