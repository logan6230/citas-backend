import { Router, Request, Response } from 'express';
import CitaController from '../controllers/Cita.controller';

class CitaRouter {
	router: Router;
	citaController: CitaController;


	constructor() {
		this.router = Router();
		this.citaController = new CitaController();
		this.routes();
	}

	private routes(): void {
		this.router.get('/citas',
		
			(req: Request, res: Response) => {
				
				this.citaController.obtenerCitas(req, res);
			});

		this.router.post('/crearCita',
			(req: Request, res: Response) => {
				this.citaController.crearCita(req, res);
			});
		this.router.put('/actualizarCita',
			(req: Request, res: Response) => {
				this.citaController.actualizarCita(req, res);
			}
		);
		this.router.delete('/cita/:idCita',
			(req: Request, res: Response) => {
				this.citaController.eliminarCita(req, res);
			}
		);
	}



}

export default new CitaRouter().router;