import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

class MedicoController {

	prismaClient: PrismaClient;

	constructor() {
		this.prismaClient = new PrismaClient();
	}

	async obtenerMedicos(req: Request, res: Response) {
		try {
			const medicos = await this.prismaClient.medico.findMany({
				select: {
					tarjetaProfesional: true,
					nombre: true,
					apellido: true,
					consultorio: true,
					telefono: true,
					email: true,
					Especialidad: {
						select: {
							nombre: true
						}
					}
				}
			});
			res.json(medicos);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async crearMedico(req: Request, res: Response) {

		try {

			const { tarjetaProfesional, nombre, apellido, consultorio, telefono, email, idEspecialidad } = req.body;


			const IdEspecialidad = parseInt(idEspecialidad);
			const medico = await this.prismaClient.medico.create({
				// data: req.body
				data: {
					tarjetaProfesional: parseInt(tarjetaProfesional),
					nombre,
					apellido,
					consultorio,
					telefono,
					email,
					IdEspecialidad
				}
			});


			res.json(medico);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async actualizarMedico(req: Request, res: Response) {
		try {
			const { tarjetaProfesional, nombre, apellido, consultorio, telefono, email, IdEspecialidad } = req.body;
			const medico = await this.prismaClient.medico.update({
				where: {
					tarjetaProfesional: Number(tarjetaProfesional)
				},
				data: {
					nombre,
					apellido,
					consultorio,
					telefono,
					email,
					IdEspecialidad: Number(IdEspecialidad)

				}
			});
			res.json(medico);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async eliminarMedicos(req: Request, res: Response) {
		try {
			const { tarjetaProfesional } = req.params;
			const medico = await this.prismaClient.medico.delete({
				where: {
					tarjetaProfesional: Number(tarjetaProfesional)
				}
			});
			res.json(medico);
		} catch (error) {
			res.status(500).json(error);
		}
	}


}
export default MedicoController;