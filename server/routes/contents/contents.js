var express = require('express');
var router = express.Router();

import { getAllContents, saveContent } from '../../controllers/contents';

import { validateBodyCreateContent } from '../../utils/middleware/contents';
import { callbackData, callbackStatus } from '../../utils/response/response';
/* GET home page. */
router.get('/', async function(req, res, next) {
    const contents = await getAllContents();
    res.status(200).send(callbackData({ status: 200, data: contents }));
});

router.post('/', validateBodyCreateContent, async function(req, res, next) {
    const { tags = [], title, content, isActive = true } = req.body;

    try {
        const newContent = await saveContent({
            title,
            content,
            tags,
            isActive
        });
        res.status(201).send(callbackData({ status: 201, data: newContent }));
    } catch (error) {
        console.log(`error: ${error}`);
        res.status(400).send(
            callbackStatus({
                status: 400,
                message: 'Cannot create content'
            })
        );
    }
});

module.exports = router;
