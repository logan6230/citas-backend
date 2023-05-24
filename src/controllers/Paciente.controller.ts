import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';


class PacienteController {
	private prismaClient: PrismaClient;

	constructor() {
		this.prismaClient = new PrismaClient();
	}

	async obtenerPacientes(req: Request, res: Response) {
		try {
			const pacientes = await this.prismaClient.paciente.findMany();
			res.json(pacientes);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async obtenerPaciente(req: Request, res: Response) {
		try {
			const { cedula } = req.params;
			const paciente = await this.prismaClient.paciente.findUnique({
				where: {
					cedula: parseInt(cedula),
				},
			});
			res.json(paciente);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async crearPaciente(req: Request, res: Response) {
		try {
			const { cedula, nombre, apellido, fechaNacimiento, telefono } = req.body;
			//TO DO: Verificar la validez la consistencia de los datos
						
			const paciente = await this.prismaClient.paciente.create({
				data: {
					cedula:parseInt(cedula),
					nombre,
					apellido,
					fechaNacimiento : new Date(fechaNacimiento),
					telefono,
				},
			});
			res.json(paciente);
		} catch (e: any) {
			res.status(400);
			res.json({ error: e.message });
			console.log(e.message);

		}
	}

	//TO DO: Crear los métodos para actualizar
	async actualizarPaciente(req: Request, res: Response) {
		try {
			const { cedula, nombre, apellido, fechaNacimiento, telefono } = req.body;
			
			//TO DO: Verificar la validez la consistencia de los datos
			console.log(fechaNacimiento);
			
			
			const paciente = await this.prismaClient.paciente.update({
				where: {
					cedula: parseInt(cedula),
				},
				data: {
					nombre,
					apellido,
					fechaNacimiento : new Date(fechaNacimiento),
					telefono,
				},
			});
			res.json(paciente);
		} catch (e: any) {
			res.status(400);
			res.json({ error: e.message });			

		}
	}

	//TO DO: Crear los método eliminar un paciente
	async eliminarPaciente(req: Request, res: Response) {
		try {
			const { cedula } = req.params;
			//TO DO: Verificar la validez la consistencia de los datos

			const cedulaNumber = Number(cedula);
			const paciente = await this.prismaClient.paciente.delete({
				where: {
					cedula: cedulaNumber,
				},
			});
			//regresar el status 204
			
			res.json(paciente);
		} catch (e: any) {
			res.status(400);
			res.json({ error: e.message });
			console.log(e.message);

		}
	}


}

export default PacienteController;