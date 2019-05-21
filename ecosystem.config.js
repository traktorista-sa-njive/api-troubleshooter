module.exports = {
  apps : [{
    name: 'app',
    script: 'index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 'max',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
