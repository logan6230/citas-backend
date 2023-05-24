import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

class CitaController {

	prismaClient: PrismaClient;

	constructor() {
		this.prismaClient = new PrismaClient();
	}

	async obtenerCitas(req: Request, res: Response) {
		try {
			const citas = await this.prismaClient.cita.findMany({
				select: {
					idCita: true,
					fechaCita: true,
					Paciente: {
						select: {
							nombre: true,
						},
					},
					Medico: {
						select: {
							nombre: true,
							Especialidad: {
								select: {
									nombre: true
								}
							}
						},
					},

				},
			});
			res.json(citas);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async crearCita(req: Request, res: Response) {
		try {
			const { fechaCita, pacienteCedula, medicoTarjetaProfesional } = req.body;

			const lastCita = await this.prismaClient.cita.findFirst({
				select: {
					idCita: true
				},
				orderBy: {
					idCita: 'desc'
				}
			});

			const nextIdCita = (lastCita?.idCita || 0) + 1;

			const cita = await this.prismaClient.cita.create({
				data: {
					idCita: nextIdCita,
					fechaCita: new Date(fechaCita),
					pacienteCedula: Number(pacienteCedula),
					medicoTarjetaProfesional: Number(medicoTarjetaProfesional)
				}
			});

			res.json(cita);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async actualizarCita(req: Request, res: Response) {

		try {
			const { idCita, fechaCita, pacienteCedula, medicoTarjetaProfesional } = req.body;
			const cita = await this.prismaClient.cita.update({
				where: {
					idCita: Number(idCita)
				},
				data: {
					fechaCita: new Date(fechaCita),
					pacienteCedula: Number(pacienteCedula),
					medicoTarjetaProfesional: Number(medicoTarjetaProfesional),
				}
			});
			res.json(cita);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async eliminarCita(req: Request, res: Response) {
		try {
			const { idCita } = req.params;
			const cita = await this.prismaClient.cita.delete({
				where: {
					idCita: Number(idCita)
				}
			});
			res.json(cita);
		} catch (error) {
			res.status(500).json(error);
		}
	}


}
export default CitaController;