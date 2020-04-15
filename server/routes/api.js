var express = require('express');
var router = express.Router();
var app = express();
var contentsRouter = require('./contents/contents');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({ Hello: 'world' });
});

router.use('/contents', contentsRouter);

module.exports = router;
