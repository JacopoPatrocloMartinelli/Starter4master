
const baseConf = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  production: 'production',
  development: 'development',
};

let envConf = {};
try {
  /* eslint-disable */
  envConf = require('./' + baseConf.env);
} catch (error) {
  console.log(error);
  /* eslint-disable */
}

module.exports = {
  ...baseConf,
  ...envConf,
};
