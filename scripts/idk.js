let tiny = require('tiny-json-http')
let fs = require('fs')
let url = YOUR_DEPLOYED_URL_HERE 

tiny.get({
  url
}, 
function(err, res) {
  Object.keys(res.body).forEach(filename=> {
    fs.writeFileSync(filename, res.body[filename])
  })
})
