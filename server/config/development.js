const jwksRsa = require('jwks-rsa');

module.exports = {
  auth0: {
    // Dynamically provide a signing key
    // based on the kid in the header and
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: '',
    }),

    // Validate the audience and txhe issuer.
    audience: '',
    issuer: '',
    algorithms: ['RS256'],
  },
};
