//backend
import { createServer } from 'https';
import { readFileSync } from 'fs';
import { WebSocketServer } from 'ws';

const server = createServer({
  cert: readFileSync('/path/to/cert.pem'),
  key: readFileSync('/path/to/key.pem')
});
const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});

server.listen(8080);
 // responsavel por guardar uma pasta, para q consiga usar a pasta depois

const io = socketio(server); //conexao com do socket com servidor

io.on ('connect', (socket)=>//iniciando a conexao e estabelecendo ela

        {io.to(socket.id).emit(
            {status : true,
            message : "conexão estabelecida com o servidor!"
        });  //transmite msg no network do console
    
    socket.on('teste', (res)=>{
        console.log('MENSAGEM RECEBIDA', res);
        
       socket.broadcast.emit('teste', res);  });//com a funçaõ do front conseguimos "conectar" uma pag a outra
});

    app.get('/', (req, res)=> {
    res.render('index.html');
}); //caminhos que se pode seguir render=rendeneriza a pag html
    app.get('/teste', (req, res)=> {
    res.send('ola'); //caminhos que se pode seguir
});

server.listen(3333, () =>{
    console.log('PORTA INICIADA', 3333) //avisa que esta sendo iniciado
}) //servidor executa sem ele fica lento 