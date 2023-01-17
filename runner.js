;(function () {
  'use strict'

  var pm2 = require('pm2')


  pm2.connect(true, function (err) {
    if (err) throw err

    pm2.start(
      {
        name: 'trudesk-'+process.argv[3],
  script: process.argv[4]+'/app.js',
        output:process.argv[4]+'/logs/output.log',
        error: process.argv[4]+'/logs/output.log',
        mergeLogs: true,
        env:{
          PORT:process.argv[2],
          INST:'trudesk-'+process.argv[3],
          EM:process.argv[5],
          USERN:process.argv[6],
          PASS:process.argv[7],
          DBase:'tenant-'+process.argv[3],
          
        },
    
      },
      function (err) {
        if (err) {
          console.log(err)
          throw err
        }
        console.log(process.argv[2]);
        
        console.log(__dirname);
      console.log(process.argv[4]);

       pm2.disconnect()
      }
    )
  })
})()
