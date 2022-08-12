//backend

import { Socket } from 'dgram';


import express from 'express';
import http from 'http';
import socketio from 'socket.io'

const app = express();
const server = http.Server(app);
app.use(express.static(__dirname + '/public')) // responsavel por guardar uma pasta, para q consiga usar a pasta depois

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