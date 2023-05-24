import { Router, Request, Response } from 'express';
import PacienteController from '../controllers/Paciente.controller';

class PacienteRouter {
	router: Router;
	pacienteController: PacienteController;

	constructor() {
		this.router = Router();
		this.pacienteController = new PacienteController();
		this.routes();
	}
	private routes(): void {



		this.router.get('/pacientes',
			(req: Request, res: Response) => {
				this.pacienteController.obtenerPacientes(req, res);
			});
		this.router.get('/paciente/:cedula',
			(req: Request, res: Response) => {
				this.pacienteController.obtenerPaciente(req, res);
			});

		this.router.post('/crearPaciente',
			(req: Request, res: Response) => {
				this.pacienteController.crearPaciente(req, res);
			});
		this.router.put('/actualizarPaciente',
			(req: Request, res: Response) => {
				this.pacienteController.actualizarPaciente(req, res);
			});
		this.router.delete('/eliminarPaciente/:cedula',
			(req: Request, res: Response) => {
				this.pacienteController.eliminarPaciente(req, res);
			});
	}

}

export default new PacienteRouter().router;