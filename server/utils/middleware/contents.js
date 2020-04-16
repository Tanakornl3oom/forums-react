import { callbackStatus } from '../response/response';

export const validateBodyCreateContent = (req, res, next) => {
    let { title = '', content = '' } = req.body;

    if (!(title && content)) {
        return res.status(400).send(
            callbackStatus({
                status: 400,
                message: 'title and content is required'
            })
        );
    }
    next();
};
