import { Request } from 'firebase-functions';
import { setRegistration } from '../utils/data';
import * as Joi from '@hapi/joi';

export const register = async (req: Request): Promise<IResponse> => {
    try {
        // validate POST data
        await Joi.object({
            bridge: Joi.string().required(),
            topic: Joi.string().uuid().required(),
            type: Joi.string().valid('fcm').required(),
            token: Joi.string().token().required(),
            peerName: Joi.string(),
            language: Joi.string()
        }).validateAsync(req.body);

        // save data in firestore
        await setRegistration(req.body);

        return {
            code: 200, 
            success: true
        }
    } catch (err) {
        return {
            code: 500,
            success: false,
            errorMessage: err.toString()
        }
    }
}