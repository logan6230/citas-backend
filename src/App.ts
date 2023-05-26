import dotenv from 'dotenv';
dotenv.config();
import express, { Application, NextFunction,Request,Response } from 'express';
import passport from 'passport';
import SwaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from './swagger.conf';
import AuthRoutes from './routes/Auth.routes';
import PacienteRouter from './routes/Paciente.routes';
import MedicoRouter from './routes/Medico.routes';
import FormularioRouter from './routes/Formulario.router';
import EspecialidaRouter from './routes/Especialidad.router';
import CitaRouter from './routes/Cita.routes';
import cors from 'cors';
import myStrategy from './config/passport';

/**
 * Clase principal de la API. Define el servidor y sus rutas
 * @author Segundo Pantoja
 * @class App
 * @description Clase de ejemplo que representa el servidor
 *
 */
class App {
	//Atributos
	public app: Application;
	private server: any;

	/**
   * Constructor de la clase
   */

	constructor() {
		this.app = express();
		this.app.use(express.json());
		this.app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerSpecs));
		this.app.use(cors());		
		this.routes();
	}
	

	private routes(): void {
		
		this.app.use('/', AuthRoutes),
		//Rutas protegidas
		passport.use(myStrategy);
		this.app.use(passport.initialize());
		this.app.use('/',passport.authenticate('jwt',{session:false}), PacienteRouter);
		this.app.use('/',passport.authenticate('jwt',{session:false}), MedicoRouter);
		this.app.use('/',passport.authenticate('jwt',{session:false}), FormularioRouter);
		this.app.use('/',passport.authenticate('jwt',{session:false}), EspecialidaRouter);
		this.app.use('/',passport.authenticate('jwt',{session:false}),CitaRouter);
		//Respuesta cuando el recurso o la ruta no existe
		this.app.use((req: Request, res: Response, next: NextFunction) => {
			res.status(404).json({ message: 'Ups!!! Lo que pidio no existe' });
			next;
		});
	}


	public start(): void {
		this.server = this.app.listen(3000, () => {
			console.log('Server on port 3000');
		});
	}

	public close(): void {
		this.server.close();
	}
}

export default App;
