//1. Importar las bibliotecas
import request from 'supertest';
//2. Importar la clase a testear
import App from '../src/App';
//3. Crear un objeto de la clase a testear

//En jest existe un objeto llamado describe que permite agrupar pruebas
describe('Test the root path', () => {
	//4. Crear una prueba
	let app: App;
	beforeAll(() => {
		app = new App();
		app.start();
	});
	afterAll(() => {
		app.close();
	});

	test('It should response the GET method', async () => { 
		const response = await request(app.app).get('/');
		expect(response.statusCode).toEqual(200);
		expect(response.text).toEqual('Hello Worlds');
	});
});
