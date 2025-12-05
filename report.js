const newman = require('newman');
require('dotenv').config();

newman.run({
  collection: `https://api.postman.com/collections/50518746-0acf8740-3380-41de-9f7b-b6b41f765f89?access_key=${process.env.pmat_key}`,
  reporters: 'htmlextra',
  iterationCount: 1,
  reporter:{
    htmlextra: {
      export: './Reports/report1.html'
    }
  }
},
  function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
  }
);