export default {
	/**
     * @swagger
     *
     *paths:
     *  /citas:
     *    get:
     *      tags:
     *        - Cita
     *      summary: Retrieve the appointments registered in the system.
     *      description: Retrieve appointments
     *      responses:
     *        '200':
     *          description: Success response with the list of registered appointments
     *          content:
     *            application/json:
     *              schema:
     *                type: array
     *                items:
     *                  $ref: '#/components/schemas/Cita'
     *  /crearCita:
     *    post:
     *      tags:
     *        - Cita
     *      summary: Add a new  appointment
     *      description: Create a new appointment.
     *      operationId: addAppointment
     *      requestBody: 
     *        description: Enter patient and doctor information to assign the medical appointment.
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Cita'
     *          application/xml:
     *            schema:
     *              $ref: '#/components/schemas/Cita'
     *          application/x-www-form-urlencoded:
     *            schema:
     *              $ref: '#/components/schemas/Cita'
     *        required: true
     *      responses:
     *        '200':
     *          description: Success response
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Cita'
     *        '400':
     *          description: Bad request error
     * 
     *  /actualizarCita:
     *    put:
     *      tags:
     *        - Cita
     *      summary: Update appointment
     *      description: Update an existing appointment in the database
     *      operationId: updateMedico
     *      requestBody:
     *        description: Update an existing appointment in the database
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Cita'
     *          application/xml:
     *            schema:
     *              $ref: '#/components/schemas/Cita'
     *          application/x-www-form-urlencoded:
     *            schema:
     *              $ref: '#/components/schemas/Cita'
     *        required: true
     *      responses:
     *        '200':
     *          description: Success response
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Cita'
     *        '400':
     *          description: Bad request error
     *  /cita/{idCita}:
     *    delete:
     *      tags:
     *        - Cita
     *      summary: Delete an appointment
     *      description: Delete an existing appointment
     *      operationId: deleteDoctor
     *      parameters:
     *        - name: idCita
     *          in: path
     *          description: Delete an appointment by entering the appointment ID.
     *          required: true
     *          schema:
     *            type: integer
     *            format: int64
     *      responses:
     *        '400':
     *         description: Not found error
     * 
     *          
     * 
     * 
     */
};