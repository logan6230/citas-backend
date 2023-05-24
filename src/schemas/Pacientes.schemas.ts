export const Paciente = {
	type: 'object',
	required: ['cedula', 'nombre', 'apellido', 'fechaNacimiento', 'telefono'],
	properties: {
		cedula: {
			type: 'number',
		},
		nombre: {
			type: 'string',
		},
		apellido: {
			type: 'string',
		},
		fechaNacimiento: {
			type: 'string',
			format: 'date',
		},
		telefono: {
			type: 'string',
		}
	},
};