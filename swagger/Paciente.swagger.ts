export default {
	/**
     * @swagger
     *paths:
     *  /crearPaciente/:
     *    post:
     *      tags:
     *        - Paciente
     *      summary: Add a new  patient
     *      description: Add a new  patiente
     *      operationId: addPaciente
     *      requestBody:
     *        description: Create a new patient in the database
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Paciente'
     *          application/xml:
     *            schema:
     *              $ref: '#/components/schemas/Paciente'
     *          application/x-www-form-urlencoded:
     *            schema:
     *              $ref: '#/components/schemas/Paciente'
     *        required: true
     *      responses:
     *        '200':
     *          description: successful operation
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Paciente'
     *        '400':
     *          description: Bad request error
     *  /pacientes:
     *    get:
     *      tags:
     *        - Paciente
     *      summary: Retrieve patients
     *      description: Retrieve all registered patients.
     *      responses:
     *        '200':
     *          description: Success response with the list of registered patients
     *          content:
     *            application/json:
     *              schema:
     *                type: array
     *                items:
     *                  $ref: '#/components/schemas/Paciente'
     *  /actualizarPaciente:
     *    put:
     *      tags:
     *        - Paciente
     *      summary: Update patient          
     *      description: Update an existing patient   
     *      operationId: updatePaciente
     *      requestBody:
     *        description: Update an existing patient in the database
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Paciente'
     *          application/xml:
     *            schema:
     *              $ref: '#/components/schemas/Paciente'
     *        required: true
     *      responses:
     *        '200':
     *          description: successful operation
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Paciente'
     *        '400':
     *          description: Bad request error
     *        '404':
     *          description: Not found error
     *        '500': 
     *         description: Internal server error
     *  /eliminarPaciente/{cedula}:
     *    delete:
     *      tags:
     *        - Paciente
     *      summary: Delete patient
     *      description: Delete an existing patient from the database.
     *      operationId: deletePaciente
     *      parameters:
     *        - name: cedula
     *          in: path
     *          description: ID of the patient to delete
     *          required: true
     *          schema:
     *            type: integer
     *            format: int64
     *      responses:
     *        '400':
     *         description: Bad request error
     *      
     * 
     * 
     */
};
