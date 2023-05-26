export default {
	/**
     * @swagger
     *
     * paths:
     *  /login:
     *    get:
     *      tags:
     *        - Autenticacion
     *      summary: Retrieve a token with login user.
     *      description: Create a token with login user.
     *      responses:
     *        '200':
     *          description: Success response with the token
     *  
     * components:
     *   securitySchemes:
     *      bearerAuth:
     *        type: http
     *        scheme: bearer
     *        bearerFormat: JWT
     * 
     * security:
     *   - bearerAuth: []
     *      
     */
};
