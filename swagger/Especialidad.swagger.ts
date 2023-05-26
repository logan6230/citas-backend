export default {
	/**
     * @swagger
     *
     *paths:
     *  /especialidades:
     *    get:
     *      tags:
     *        - Especialidad
     *      summary: Retrieve specialties
     *      description: Retrieve all registered specialties.
     *      responses:
     *        '200':
     *          description:  Success response with the list of registered specialties
     *          content:
     *            application/json:
     *              schema:
     *                type: array
     *                items:
     *                  $ref: '#/components/schemas/Especialidad'
     *      security:
     *        - bearerAuth: []
     *  /crearEspecialidad:
     *    post:
     *      tags:
     *        - Especialidad
     *      summary: Add a new  speciality
     *      description: Retrieve all available specialties.
     *      operationId: addSpeciality
     *      requestBody:
     *        description: Create a new speciality in the database
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Especialidad'
     *          application/xml:
     *            schema:
     *              $ref: '#/components/schemas/Especialidad'
     *          application/x-www-form-urlencoded:
     *            schema:
     *              $ref: '#/components/schemas/Especialidad'
     *        required: true
     *      responses:
     *        '200':
     *          description: successful operation
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Especialidad'
     *        '400':
     *          description: Invalid input
     *      security:
     *        - bearerAuth: []
     * 
     *  /actualizarEspecialidad:
     *    put:
     *      tags:
     *        - Especialidad
     *      summary: Retrieve specialities
     *      description: Retrieve all existing specialities.
     *      operationId: updateEspecialidad
     *      requestBody:
     *        description: Update an existing speciality in the database
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Especialidad'
     *          application/xml:
     *            schema:
     *              $ref: '#/components/schemas/Especialidad'
     *          application/x-www-form-urlencoded:
     *            schema:
     *              $ref: '#/components/schemas/Especialidad'
     *        required: true
     *      responses:
     *        '200':
     *          description: successful operation
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Especialidad'
     *        '400':
     *          description: Invalid input
     *      security:
     *        - bearerAuth: []
     *  /especialidad/{idEspecialidad}:
     *    delete:
     *      tags:
     *        - Especialidad
     *      summary: Delete speciality
     *      description: Delete a specialty by entering its idEspeciality.
     *      operationId: deleteSpeciality
     *      parameters:
     *        - name: idEspecialidad
     *          in: path
     *          description: Delete a speciality by entering their ID.
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