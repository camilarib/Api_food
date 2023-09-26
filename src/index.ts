//importa as bibliotecas nescessário
import path from 'node:path'; //manipula os caminhos de arquivo 
import express from 'express'; //cria o servidor 
import mongoose from 'mongoose'; // biblioteca utilizada para interagir com o mongoDb

import { router } from './router'; //definição de rota para o app

mongoose.connect('mongodb://localhost:27017') //se conecta ao servidor mongoDb
	.then(() => { //cria e configura um servidor
		const app = express(); //Cria uma instância do aplicativo
		const port = 3000; //Define a variável port para 3000, que será a porta em que o servidor irá escutar.

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); //Define um middleware para servir arquivos estáticos da pasta uploads
		app.use(express.json()); //Habilita o middleware
		app.use(router); //Utiliza o roteador definido no arquivo importado para definir as rotas do aplicativo.
		
		//teclado de emotion tecla win+.
		//inicia o servidor na porta especifica
		app.listen(port, () => {
			console.log(`🚗Server is runing on http://localhost:${port}`);
		});
	})
	.catch(() => console.log('Erro ao conectar no mongoDb')); //exibe msg de erro no console
