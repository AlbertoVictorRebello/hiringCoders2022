const http = require('http');
const queryString = require('query-string');
const url = require('url');
const fs = require('fs');


const hostname = '127.0.0.1'; 
const port = 3000; 


const server = http.createServer((req, res) => {
  
  var resposta;
  const urlparse = url.parse(req.url, true); //para criar a seleção de usuário
  const params = queryString.parse(urlparse.search); 

// http://localhost:3000/criar-usuario?name=abreu_yas&age=18&id=1
if (urlparse.pathname == '/criar-usuario') { 

   
   fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) { 

    if (err) throw err; //se der errado
    console.log('Saved!'); //se der certo

  });
  
  resposta = 'Usuario criado com sucesso.';
}

// http://localhost:3000/selecionar-usuario?id=1
else if (urlparse.pathname == '/read-user') {
    // Read User
    // http://localhost:3000/read-user?id=1
    fs.readFile(`users/${ params.id }.txt`, function(err, data) {
        resposta = err ? 'User not found' : data       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(resposta);
    })
}




  res.statusCode = 200; //passamos esses códigos para dentro das condicionais para que tudo se execute ao mesmo tempo.
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});