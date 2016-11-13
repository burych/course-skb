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

  let sum = String (query.username);
  
  console.log(sum);

  const substringArray = sum.split("/");
  const l = substringArray.length;
  if (/[^A-Za-z0-9_.@]/g.test(substringArray[l-1]))
  {
    preName = substringArray[l-2];
  }else{
    preName = substringArray[l-1]
  }

  const substringArray1 = preName.split(/"?"/g);
  let preName1 = substringArray1[0];
  if (String(substringArray1[0].charAt(0)) == "@")
  {
    preName1 = substringArray1[0];
  }else
{
    preName1 = "@" + substringArray1[0];
}

  console.log(`<-- ${sum}`);
  res.end(preName1);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});