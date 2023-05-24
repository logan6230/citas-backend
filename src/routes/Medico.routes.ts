import { Router, Request, Response } from 'express';
import MedicoController from '../controllers/Medico.controller';

class MedicoRouter {
	router: Router;
	medicoController: MedicoController;


	constructor() {
		this.router = Router();
		this.medicoController = new MedicoController();
		this.routes();
	}

	private routes(): void {
		this.router.get('/medicos',
		
			(req: Request, res: Response) => {
				
				this.medicoController.obtenerMedicos(req, res);
			});

		this.router.post('/crearMedico',
			(req: Request, res: Response) => {
				this.medicoController.crearMedico(req, res);
			});
		this.router.put('/actualizarMedico',
			(req: Request, res: Response) => {
				this.medicoController.actualizarMedico(req, res);
			}
		);
		this.router.delete('/medico/:tarjetaProfesional',
			(req: Request, res: Response) => {
				this.medicoController.eliminarMedicos(req, res);
			}
		);
	}



}

export default new MedicoRouter().router;