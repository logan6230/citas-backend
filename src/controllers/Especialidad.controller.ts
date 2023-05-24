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
	// async crearPaciente(req: Request, res: Response) {
	// 	try {
	// 		const { cedula, nombre, apellido, fecha, telefono } = req.body;
	// 		//TO DO: Verificar la validez la consistencia de los datos

	// 		const fechaNacimiento = new Date(fecha);
	// 		const paciente = await this.prismaClient.paciente.create({
	// 			data: {
	// 				cedula,
	// 				nombre,
	// 				apellido,
	// 				fechaNacimiento,
	// 				telefono,
	// 			},
	// 		});
	// 		res.json(paciente);
	// 	} catch (e: any) {
	// 		res.status(400);
	// 		res.json({ error: e.message });
	// 		console.log(e.message);

	// 	}
	// }

	// //TO DO: Crear los métodos para actualizar
	// async actualizarPaciente(req: Request, res: Response) {
	// 	try {
	// 		const { cedula, nombre, apellido, fecha, telefono } = req.body;
	// 		//TO DO: Verificar la validez la consistencia de los datos
	// 		const fechaNacimiento = new Date(fecha);
	// 		const paciente = await this.prismaClient.paciente.update({
	// 			where: {
	// 				cedula: cedula,
	// 			},
	// 			data: {
	// 				nombre,
	// 				apellido,
	// 				fechaNacimiento,
	// 				telefono,
	// 			},
	// 		});
	// 		res.json(paciente);
	// 	} catch (e: any) {
	// 		res.status(400);
	// 		res.json({ error: e.message });
	// 		console.log(e.message);

	// 	}
	// }

	// //TO DO: Crear los método eliminar un paciente
	// async eliminarPaciente(req: Request, res: Response) {
	// 	try {
	// 		const { cedula } = req.params;
	// 		//TO DO: Verificar la validez la consistencia de los datos

	// 		const cedulaNumber = Number(cedula);
	// 		const paciente = await this.prismaClient.paciente.delete({
	// 			where: {
	// 				cedula: cedulaNumber,
	// 			},
	// 		});
	// 		res.json(paciente);
	// 	} catch (e: any) {
	// 		res.status(400);
	// 		res.json({ error: e.message });
	// 		console.log(e.message);

	// 	}
	// }


}

export default EspecialidadController;