export default {
	/**
     * @swagger
     *paths:
     *  /formulario/{formulario}:
     *    get:
     *      tags:
     *        - Formulario
     *      description: Retorna el formulario solicitado
     *      parameters:
     *        - name: formulario 
     *          in: path
     *          description: Nombre del formulario
     *          required: true
     *          explode: true
     *          schema:
     *            type: string
     *            default: Paciente
     *            enum:
     *             - Paciente
     *             - Medico
     *             - Cita          
     *      responses:
     *        200:
     *           description: successful operation
     *           type: string
     *           content:
     *           application/json:
     *        400:
     *          description: invalid status value
     *      security:
     *        - bearerAuth: []
     * 
     *
     *           
     *          
     * 
     * 
     */
};