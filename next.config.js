const withSass = require('@zeit/next-sass');
require('dotenv').config();

const { 
  NODE_ENV: nodeEnv,
  WOO_CONSUMER_SECRET,
  WOO_CONSUMER_KEY,
  FEATURED_CATEGORY_ID,
  DOMAIN_NAME,
} = process.env;

console.log('NODE_ENV: ', nodeEnv);

module.exports = withSass({
  /*webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config = {
      ...config,
      target: 'node',
      node: {
        __dirname: false,
        __filename: false,
      }
    };
    return config;
  },*/
  compress: false,

  // Get assets from itsupplies.co if in production environment.
  assetPrefix: nodeEnv === 'production' ? 'http://itsupplies.co/' : '',

  // Expose env vars to app at build time.
  env: {
    WOO_CONSUMER_SECRET,
    WOO_CONSUMER_KEY,
    // Deprecated: Serve static assets from within the next app.
    //staticPath: nodeEnv === 'production' ? 'http://itsupplies.co/static' : '',
    FEATURED_CATEGORY_ID,
    nodeEnv,
    DOMAIN_NAME,
  },
});
