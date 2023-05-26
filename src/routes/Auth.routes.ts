import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';



class AuthRouter {
	router: Router;
	// citaController: CitaController;


	constructor() {
		this.router = Router();
		// this.citaController = new CitaController();
		this.routes();
	}

	private routes(): void {
		//Defino la ruta para ingresar y obtener el token
		this.router.get('/login',
			(req: Request, res: Response) => {
				//No colocar datos sensibles o importantes en un JWT
				const payload = {
					id: 'user_id',
					username: 'segundo'
				};
				const options = {
					expiresIn: '1h',
				};
				const secretKey = process.env.SECRET_KEY;
				//Verificar que secretKey sea un string
				if (typeof secretKey === 'string') {
					const token = jwt.sign(payload, secretKey, options);
					res.json(token);
				}
			});

		// this.router.post('/logout',
		// 	(req: Request, res: Response) => {
		// 		this.citaController.crearCita(req, res);
		// 	});

	}



}

export default new AuthRouter().router;