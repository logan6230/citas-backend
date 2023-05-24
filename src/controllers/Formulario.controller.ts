import{Request, Response} from 'express';
import * as jsonSchema from '../json-schema.json';

//Se define el tipo de dato que se va a recibir
type JsonSchema = Record<string, any>;

class FormularioController{
	obtenerDefinicion(req: Request, res: Response){
		//1.Extraer el nombre del formulario
		const {formulario} = req.params;
		//Se castea el json-schema a JsonSchema
		const miEsquema:JsonSchema = jsonSchema;
		//2.Obtener el json-schema del formulario
		if(miEsquema.definitions[formulario]){
			res.json(miEsquema.definitions[formulario]);
		}else{
			res.status(400).json({
				status: 400,
				message: 'Formulario no encontrado'
			});
		}
        
	}

}

export default FormularioController;
