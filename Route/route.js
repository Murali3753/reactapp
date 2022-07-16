const  express = require('express');
const router = express.Router();
const {
    add,
    getproductDetails,

} = require('../controller/controller')


//routes for apis

router.post('/add',add)

router.get('/getproductDetails',getproductDetails)


module.exports = router;