;(function () {
  'use strict'

  var pm2 = require('pm2')
  var path = require('path')
  var nconf = require('nconf')

  pm2.connect(true, function (err) {
    if (err) throw err

    pm2.start(
      {
        name: 'trudesk-'+process.argv[3],
        script: path.join(process.argv[4], '/app.js'),
        output: path.join(process.argv[4], '/logs/output.log'),
        error: path.join(process.argv[4], '/logs/output.log'),
        mergeLogs: true,
        env:{
          PORT:process.argv[2],
        },
    
      },
      function (err) {
        if (err) {
          console.log(err)
          throw err
        }
        console.log(process.argv[2]);
         nconf.set('dbt',process.argv[3]);
        console.log(__dirname);
      console.log(process.argv[4]);

       pm2.disconnect()
      }
    )
  })
})()
