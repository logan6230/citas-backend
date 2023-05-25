import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';


class EspecialidadController {
	private prismaClient: PrismaClient;

	constructor() {
		this.prismaClient = new PrismaClient();
	}

	async obtenerEspecialidad(req: Request, res: Response) {
		try {
			const especialidad = await this.prismaClient.especialidad.findMany();
			res.json(especialidad);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async crearEspecialidad(req: Request, res: Response) {
		try {
			const { nombre } = req.body;

			const lastEspecialidad = await this.prismaClient.especialidad.findFirst({
				select: {
					idEspecialidad: true
				},
				orderBy: {
					idEspecialidad: 'desc'
				}
			});

			const nextIdEspecialidad = (lastEspecialidad?.idEspecialidad || 0) + 1;

			const especialidad = await this.prismaClient.especialidad.create({
				data: {
					idEspecialidad: nextIdEspecialidad,
					nombre
				},
			});
			res.json(especialidad);
		} catch (e: any) {
			res.status(400);
			res.json({ error: e.message });
			console.log(e.message);

		}
	}

	// //TO DO: Crear los métodos para actualizar
	async actualizarEspecialidad(req: Request, res: Response) {
		try {
			const { idEspecialidad, nombre } = req.body;
			//TO DO: Verificar la validez la consistencia de los datos

			const especialidad = await this.prismaClient.especialidad.update({
				where: {
					idEspecialidad: Number(idEspecialidad),
				},
				data: {
					nombre
				},
			});
			res.json(especialidad);
		} catch (e: any) {
			res.status(400);
			res.json({ error: e.message });
			console.log(e.message);

		}
	}

	
	async eliminarEspecialidad(req: Request, res: Response) {
		try {
			const { idEspecialidad } = req.params;
			//TO DO: Verificar la validez la consistencia de los datos

			const especialidad = await this.prismaClient.especialidad.delete({
				where: {
					idEspecialidad: Number(idEspecialidad),
				},
			});
			res.json(especialidad);
		} catch (e: any) {
			res.status(400);
			res.json({ error: e.message });
			console.log(e.message);

		}
	}


}

export default EspecialidadController;