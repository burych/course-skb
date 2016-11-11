const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const sum = String (query.fullname);
  let name;
  //const sum1 = "Steven Paul Jobs";
  const substringArray = sum.split(" ");
  

  const l = substringArray.length;
  switch(l){	
  case 1:
  if (String(substringArray[0].toString()) != "")
  	name = String(substringArray[0].toString());
  else
  	name = String("Invalid fullname");
  break;
  case 2:
  name = String(substringArray[1].toString()) + " " + String(substringArray[0].toString()).charAt(0) + ".";
  break;
  case 3:
  name = String(substringArray[2].toString()) + " " + String(substringArray[0].toString()).charAt(0) + "." + " " + String(substringArray[1].toString()).charAt(0) + ".";
  break;
  default:
  name = String("Invalid fullname");
  }

  res.setHeader('access-control-allow-origin', 'http://account.skill-branch.ru');
  res.setHeader('access-control-allow-methods', 'GET');
  res.setHeader('access-control-allow-headers', 'content-type, accept');
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  
  //res.end(sum);

  //res.end(substringArray[0].toString());
  res.end(name);
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});