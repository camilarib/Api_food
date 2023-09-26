import {model, Schema } from 'mongoose'; // importa as bibliotecas nescessarias 

export const Category = model('Category', new Schema({ // define modelos de dados 
	name: {
		type: String, //define um campo do tipo String
		required: true, //atribui valor para o campo name 
	},
	icon: {
		type: String, //define um campo do tipo String
		required: true, //atribui valor para o campo icon
	}
}));
