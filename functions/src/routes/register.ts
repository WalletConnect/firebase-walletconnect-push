import { Request } from 'firebase-functions';
import { setRegistration } from '../utils/data';
import * as Joi from '@hapi/joi';
import axios from 'axios';

export const register = async (req: Request): Promise<IResponse> => {
    try {
        // validate POST data
        await Joi.object({
            bridge: Joi.string().uri().required(),
            topic: Joi.string().uuid().required(),
            type: Joi.string().valid('fcm').required(),
            token: Joi.string().token().required(),
            peerName: Joi.string(),
            language: Joi.string()
        }).validateAsync(req.body);

        // save data in firestore
        await setRegistration(req.body);

        // register webhook on the bridge
        const webhook = `${req.protocol}://${req.headers.host}${req.baseUrl}`;
        const bridgeSubscribeResponse = await axios.post(
            `${req.body.bridge.replace(/\/$/, '')}/subscribe`, 
            {
                topic: req.body.topic,
                webhook
            }
        );
        if (bridgeSubscribeResponse.status !== 200 || !bridgeSubscribeResponse?.data?.success) {
            throw new Error("Subscription to bridge failed.");
        }

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