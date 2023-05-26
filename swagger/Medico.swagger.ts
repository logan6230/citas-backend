export default {
	/**
     * @swagger
     *
     *paths:
     *  /medicos:
     *    get:
     *      tags:
     *        - Medico
     *      summary: Retrieve doctors
     *      description: Retrieve all registered doctors.
     *      responses:
     *        '200':
     *          description:  Success response with the list of registered doctors
     *          content:
     *            application/json:
     *              schema:
     *                type: array
     *                items:
     *                  $ref: '#/components/schemas/Medico'
     *      security:
     *        - bearerAuth: []
     *  /crearMedico:
     *    post:
     *      tags:
     *        - Medico
     *      summary: Add a new  doctor
     *      description: Retrieve all available specialties.
     *      operationId: addDoctor
     *      requestBody:
     *        description: Create a new doctor in the database
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Medico'
     *          application/xml:
     *            schema:
     *              $ref: '#/components/schemas/Medico'
     *          application/x-www-form-urlencoded:
     *            schema:
     *              $ref: '#/components/schemas/Medico'
     *        required: true
     *      responses:
     *        '200':
     *          description: successful operation
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Medico'
     *        '400':
     *          description: Invalid input
     *      security:
     *        - bearerAuth: [] 
     * 
     *  /actualizarMedico:
     *    put:
     *      tags:
     *        - Medico
     *      summary: Retrieve doctors
     *      description: Retrieve all existing doctors.
     *      operationId: updateMedico
     *      requestBody:
     *        description: Update a existing doctor in the database
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Medico'
     *          application/xml:
     *            schema:
     *              $ref: '#/components/schemas/Medico'
     *          application/x-www-form-urlencoded:
     *            schema:
     *              $ref: '#/components/schemas/Medico'
     *        required: true
     *      responses:
     *        '200':
     *          description: successful operation
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Medico'
     *        '400':
     *          description: Invalid input
     *      security:
     *        - bearerAuth: []
     *  /medico/{tarjetaProfesional}:
     *    delete:
     *      tags:
     *        - Medico
     *      summary: Delete doctor
     *      description: Delete an existing doctor
     *      operationId: deleteDoctor
     *      parameters:
     *        - name: tarjetaProfesional
     *          in: path
     *          description: Delete a doctor by entering their professional card number.
     *          required: true
     *          schema:
     *            type: integer
     *            format: int64
     *      responses:
     *        '400':
     *         description: Bad request error
     *      security:
     *        - bearerAuth: []
     * 
     *          
     * 
     * 
     */
};