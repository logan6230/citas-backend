export const Cita = {
	type: 'object',
	required: [ 'fechaCita', 'pacienteCedula', 'medicoTarjetaProfesional'],
	properties: {
		idCita: {
			type: 'number',
		},
		fechaCita: {
			type: 'string',
			format: 'date',
		},
		pacienteCedula: {
			type: 'number',
		},
		medicoTarjetaProfesional: {
			type: 'number',
		}
	},
};