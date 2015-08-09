module.exports = {
  development: {
    buildEnv: 'development', // Override the environment passed to the ember asset build. Defaults to 'production'
    store: {
      type: 'redis', // the default store is 'redis'
      host: 'localhost',
      port: 6379
    },
    assets: {
      type: 's3', // default asset-adapter is 's3'
      gzip: false, // if undefined or set to true, files are gziped
      gzipExtensions: ['js', 'css', 'svg'], // if undefined, js, css & svg files are gziped
      exclude: ['.DS_Store', '*-test.js'], // defaults to empty array
      accessKeyId: '<your-access-key-goes-here>',
      secretAccessKey: process.env['AWS_ACCESS_KEY'],
      bucket: '<your-bucket-name>'
    }
  },

   production: {
    store: {
      host: 'ec2-54-68-118-171.us-west-2.compute.amazonaws.com',
      port: 6379,
      password: ''
    },
    assets: {
      accessKeyId: 'AKIAJ5S75LNIUAQNW4AA',
      secretAccessKey: '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',
      bucket: 'boomshaka'
    }
  }
};
