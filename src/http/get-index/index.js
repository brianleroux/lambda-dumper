let fs = require('fs')
let exec = require('child_process').execSync

exports.handler = async (event) => {
  
  let result = exec(`ls -lh /var/runtime`).toString()
  console.log(result)
  
  let files = [
    'BeforeExitListener.js',
    'CallbackContext.js',
    'Errors.js',
    'InvokeContext.js',
    'LogPatch.js',
    'RAPIDClient.js',
    'Runtime.js',
    'UserFunction.js'
  ]
  
  let contents = files.map(f=> fs.readFileSync(`/var/runtime/${f}`).toString())
  let merged = files.reduce((a, b)=> {
    let content = contents[files.indexOf(b)]
    a[b] = content
    return a
  }, {})
  
  console.log(JSON.stringify(merged))
    
  return {
    statusCode: 200,
    body: JSON.stringify(merged)
  }
}
