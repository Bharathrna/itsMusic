import {authorize, refresh} from 'react-native-app-auth';

//let SpotifyWebApi = require('spotify-web-api-node');

class AuthenticationHandler {
    constructor() {
        this.spotifyAuthConfig = {
            clientId: 'e478de7527cc4ff199243e089d5fb30a',
            clientSecret: 'f270d1c7004e47978e46e1b942832b5c',
            redirectUrl: 'com.itsmusic://oauthredirect',
            scopes: [
                'playlist-read-private',
                'playlist-modify-public',
                'playlist-modify-private',
                'user-library-read',
                'user-library-modify',
                'user-top-read',
            ],
            serviceConfiguration: {
                authorizationEndpoint: 'https://accounts.spotify.com/authorize',
                tokenEndpoint: 'https://accounts.spotify.com/api/token',
            },
        };  
    }

    async onLogin() {
        try {
        console.log("Im login here");
        const result = await authorize(this.spotifyAuthConfig);
        console.log("Im login here", result);
        alert(JSON.stringify(result));
        return result;
        } catch (error) {
        console.log("This is error: ", JSON.stringify(error), error);
        } 
    }

    async refreshLogin(refreshToken) {
        const result = await refresh(this.spotifyAuthConfig, {
        refreshToken: refreshToken,
        });
        return result;
    }

}

const authHandler = new AuthenticationHandler();

// const scopes =  [
//     'playlist-read-private',
//     'playlist-modify-public',
//     'playlist-modify-private',
//     'user-library-read',
//     'user-library-modify',
//     'user-top-read',
// ];

// const spotifyApi = new SpotifyWebApi({
//     clientId: 'e478de7527cc4ff199243e089d5fb30a',
//     clientSecret: 'f270d1c7004e47978e46e1b942832b5c',
//     redirectUrl: 'com.itsmusic://oauthredirect',
// });

// const authorizeURL = spotifyApi.createAuthorizeURL(scopes);

// console.log(authorizeURL);

export default authHandler;
