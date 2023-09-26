import {model, Schema } from 'mongoose'; // principais classes usadas para definir e criar modelos de dados para o MongoDB

export const Order = model('Order', new Schema({ // cria um modelo chamado order
	table: {
		type: String, //define um campo do tipo string
		required: true, //define a propriedade required
	},
	status: {
		type: String, //define um campo do tipo string
		enum: ['WAITING', 'IN_PRODUCTION', 'DONE'], // propriedade enum especifica que o campo status só pode ter um dos valores permitidos 
		default: 'WAITING', //valor padrão é 'WAITING'.
	},
	creatdAt: {
		type: Date, //define um campo do tipo date
		default: Date.now, //valor padrão definido com date.now
	},
	products: {
		required: true,
		type:[{
			product: {
				type: Schema.Types.ObjectId, //referência a um produto
				required: true,
				ref: 'Product',
			},
			quantity: {
				type: Number,
				default: 1,
			},
		}],
	},
}));
