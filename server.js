
const http = require('http');


const requestListener = (req, res) => {
 
  if (req.url.startsWith('/saudacao/')) {
  
    const nome = req.url.split('/')[2]; 
    if (nome) {
      
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!');
    } else {
     
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Nome não fornecido!');
    }

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
};


const server = http.createServer(requestListener);


server.listen(3000, () => {
  console.log('Servidor está rodando na porta 3000');
});
