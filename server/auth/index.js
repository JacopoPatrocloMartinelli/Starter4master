const jwt = require('express-jwt');
const config = require('../config');

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt(config.auth0);

module.exports = checkJwt;
