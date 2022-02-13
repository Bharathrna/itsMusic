export const PN_SIGN_IN = 'PN_SIGN_IN'
export const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN'
export const FB_SIGN_IN = 'FB_SIGN_IN'
export const SIGN_IN = 'SIGN_IN'
export const SIGNUP = 'SIGNUP';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const googleSignIn = () => {
    console.log('Am google action');
    return {type: GOOGLE_SIGN_IN}
};