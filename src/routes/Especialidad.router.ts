import { Router, Request, Response } from 'express';
import EspecialidadController from '../controllers/Especialidad.controller';


class EspecialidadRouter {
	router: Router;
	especialidadController: EspecialidadController;

	constructor() {
		this.router = Router();
		this.especialidadController = new EspecialidadController();
		this.routes();
	}
	private routes(): void {



		this.router.get('/especialidades',
			(req: Request, res: Response) => {
				this.especialidadController.obtenerEspecialidad(req, res);
			});

		this.router.post('/crearEspecialidad',
			(req: Request, res: Response) => { 
				this.especialidadController.crearEspecialidad(req, res);
			});
		this.router.put('/actualizarEspecialidad',
			(req: Request, res: Response) => {
				this.especialidadController.actualizarEspecialidad(req, res);
			});
		this.router.delete('/especialidad/:idEspecialidad',
			(req: Request, res: Response) => {
				this.especialidadController.eliminarEspecialidad(req, res);
			});
	}

}

export default new EspecialidadRouter().router;