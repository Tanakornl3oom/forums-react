var express = require('express');
var router = express.Router();

import { getAllContents, saveContent } from '../../controllers/contents';

/* GET home page. */
router.get('/', async function(req, res, next) {
    const contents = await getAllContents();
    res.send({ data: contents });
});

router.post('/', async function(req, res, next) {
    const newContent = await saveContent({
        title: 'test1',
        content: 'test1',
        tags: ['test1']
    });
    res.send(newContent);
});

module.exports = router;
