const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('access-control-allow-origin', 'http://account.skill-branch.ru');
  res.setHeader('access-control-allow-methods', 'GET');
  res.setHeader('access-control-allow-headers', 'content-type, accept');
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;


  function checkSymbols(name) {
  return !((/\d|_|\//g).test(name));
}
  console.log(`--> ${req.url}`);

  const query = url.parse(req.url, true).query;
  let sum = String (query.fullname);
  sum = sum.toLowerCase();
  sum = sum.replace(/^ */g, "");
  sum = sum.replace(/$ */g, "");
  sum = sum.replace(/  */g, " ");
  console.log(sum);

  let name;
  const substringArray = sum.split(" ");
  const l = substringArray.length;

  for (i = 0; i < l; i ++)
  {
  	substringArray[i] = substringArray[i].charAt(0).toUpperCase() + substringArray[i].substr(1, substringArray[i].length-1);
  }

  if (String(substringArray[0].toString()) == "" || !checkSymbols(sum))
  	res.end("Invalid fullname");

  switch(l){	
  case 1:
  	name = String(substringArray[0].toString());
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
  console.log(`<-- ${name}`);
  res.end(name);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});