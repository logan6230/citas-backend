import express, { Application} from 'express';
import SwaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from './swagger.conf';
import PacienteRouter from './routes/Paciente.routes';
import MedicoRouter from './routes/Medico.routes';
import FormularioRouter from './routes/Formulario.router';
import EspecialidaRouter from './routes/Especialidad.router';
import CitaRouter from './routes/Cita.routes';
import cors from 'cors';

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
		this.app.use('/', PacienteRouter);
		this.app.use('/', MedicoRouter);
		this.app.use('/',FormularioRouter);
		this.app.use('/',EspecialidaRouter);
		this.app.use('/',CitaRouter);
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
