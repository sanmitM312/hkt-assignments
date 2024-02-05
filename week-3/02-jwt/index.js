const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const userSchema = zod.object({
    username : zod.string().email(),
    password : zod.string().min(6)
})
/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here

    // check if valid email address
    // check if password has length atleast 6 characters
    let valid = false;
    try{
        valid = userSchema.parse({ username, password})
    }catch(error){
        console.log(error)
    }
    return valid ? jwt.sign({username : username, password : password}, jwtPassword) : null;

}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
 
    let decoded = "";
    try{
        decoded  = jwt.verify(token,jwtPassword);
    }catch(err){
        // console.log("Error occured : " + err);
        return false;
    }
    return decoded ? true : false;
}
    

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    const decodedPayload = jwt.decode(token);
    console.log(decodedPayload);
    if(decodedPayload && decodedPayload.username && decodedPayload.password){
        return true;
    }
    return false;
}

const token = signJwt("abc@gmail.com", "123456");
const token2 = jwt.sign({ username: 'abc@gmail.com', password: '123456' }, "randomPassword");

console.log(token);
console.log(token2);

console.log(verifyJwt(token));
console.log(verifyJwt(token2));

console.log(decodeJwt(token))
// console.log(decodeJwt(token2));

// console.log(signJwt("abc@gmail", "123456"));
// console.log(signJwt("abc@gmail.com", "12356"));
module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
