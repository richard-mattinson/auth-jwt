const jwt = require('jsonwebtoken');

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secret) {
    const newToken = jwt.sign(payload, secret)
    return newToken
}

console.log(createToken());
// node src/token.js

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secret, expiryTime) {
    const newToken = jwt.sign(payload, secret, {expiresIn: expiryTime});
    return newToken;
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, secret) {
try {
    const createdToken = jwt.verify(token, secret)
    if(createdToken){ // if the token exists, the user must be authenticated
        return createdToken
    }
} catch (err) {
    return false
}
}

console.log((verifyToken(createToken, secret)));

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken
}
