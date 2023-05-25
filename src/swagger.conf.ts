//importar la biblioteca de trabajo swagger
import swaggerJsdoc from 'swagger-jsdoc';
import { Paciente } from './schemas/Pacientes.schemas';
import { Medico } from './schemas/Medico.schemas';
import { Cita } from './schemas/Cita.schemas';
import { Especialidad } from './schemas/Especialidad.schemas';


export const swaggerOption = {
	swaggerDefinition: {
		//api paa definir apis
		openapi: '3.0.0',
		info: {
			title: 'API de IPS de la U',
			version: '1.0.0',
			description: 'Proyecto para gestionar citas medicas de la IPS de la U',
		},
		servers: [
			{
				url: 'http://localhost:3000',
				description: 'Servidor de prueba',
			}
		],
		components: {
			schemas: {
				Paciente,
				Medico,
				Cita,
				Especialidad



			},
		},
	},
	//Lugares donde swagger va encontar informacion para trabajar
	apis: ['./swagger/*.swagger.ts', './src/App.ts', './src/routes/*.routes.ts'],
	// ','./src/App.ts','./src/routes/*.routes.ts
};


export const swaggerSpecs = swaggerJsdoc(swaggerOption);
