import {https, Request, config} from 'firebase-functions';
import {initializeApp, credential} from 'firebase-admin';
import { push } from './routes/push';
import { register } from './routes/register';
import cors from 'cors';

import * as serviceAccount from "./service-account.json";

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
adminConfig.credential = credential.cert(serviceAccount as any);
initializeApp(adminConfig);

exports.push = https.onRequest(async (req: Request, res) => {
    cors()(req, res, () => {});  
    if (req.method.toUpperCase() === "OPTIONS") {
      return res;
    }

    let response: IResponse = {
      code: 404, 
      success: false, 
      errorMessage: 'Error: Operation not supported'
    };
  
    if (req.method.toUpperCase() === "POST") {
      switch (req.params[0]) {
        case "/": 
          response = await push(req);
          break;
        case "/new":
          response = await register(req);
          break;
      }
    } 
  
    return res.status(response.code).send(response);
})