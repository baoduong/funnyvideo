import * as functions from "firebase-functions";
// import * as admin from 'firebase-admin';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import * as App from 'firebase/app';
import { AuthenError } from './constants';

App.initializeApp({
    projectId: 'funny-video-578ac',
    appId: '1:999545879604:web:dbc5cc5bbe8edd032e1e61',
    storageBucket: 'funny-video-578ac.appspot.com',
    apiKey: 'AIzaSyCElbdLNw7kgCImaKBlvT9DrvOmjr7UdhI',
    authDomain: 'funny-video-578ac.firebaseapp.com',
    messagingSenderId: '999545879604',
    measurementId: 'G-Y86JQ3E90P',
});


export const login = functions.https.onRequest(async (request, response) => {
    const { email, password } = request.query;
    if (email && password) {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email as string, password as string).then((data) => {
            response.send({
                message: data
            });
        }).then((data) => {
            response.send({
                message: data
            });
        }).catch(async error => {
            const code = (error as any).code;
            if (code === AuthenError.USER_NOT_FOUND) {
                await createUserWithEmailAndPassword(auth, email as string, password as string)
                    .then(data => {
                        response.send({
                            message: data
                        });
                    }).catch(error => {
                        response.send({
                            message: error.code
                        });
                    })
            } else {
                response.send("Login failed");
            }
        })

    } else {
        response.send("Cannot Login!");
    }

});