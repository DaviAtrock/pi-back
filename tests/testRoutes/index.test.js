import { Test } from '../jest.setup';

let token;
let userId;
let partId;
let carId;

describe('Rotas /users', () => {

    it('[POST] Deverá retornar 201 caso o usuário seja criado com sucesso', async () => {
        const response = await Test.post('/users').send({ name: 'Test Jest', email: 'test@test.com.br', pass: 'test@jest' });
        expect(response.status).toBe(201);
    });

    it('[POST] Deverá retornar 400 caso ocorra algum erro ao criar um novo usuário', async () => {
        const response = await Test.post('/users').send({ name: 'Test Jest', email: 'test@test.com.br', pass: 'test@jest' });
        expect(response.status).toBe(400);
    });

    it('Realizar Login com usuário de teste', async () => {
        const response = await Test.post('/login').send({ email: 'test@test.com.br', pass: "test@jest" });
        token = response.body.token;
        expect(response.status).toBe(200);
    });

    it('[GET] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.get('/users').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });

    it('[GET] Deverá retornar 200 caso localize os usuários cadastrados', async () => {
        const response = await Test.get('/users').set('Authorization', `Bearer ${token}`);
        userId = response.body.users[0].user_id;
        expect(response.status).toBe(200);
    });

    it('[PUT] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.put('/users').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });

    it('[PUT] Deverá retornar 400 caso ocorra algum erro ao alterar senha do usuário', async () => {
        const response = await Test.put('/users').set('Authorization', `Bearer ${token}`).query({ userPass: '12345678', userConfirmPass: '123456' });
        expect(response.status).toBe(400);
    });

    it('[PUT] Deverá retornar 200 caso a senha do usuário seja alterada com sucesso', async () => {
        const response = await Test.put('/users').set('Authorization', `Bearer ${token}`).query({ userPass: '123456', userConfirmPass: '123456' });
        expect(response.status).toBe(200);
    });

    it('[DELETE] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.delete('/users').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });

    it('[DELETE] Deverá retornar 400 quando não localizar o usuário a ser removido', async () => {
        const response = await Test.delete('/users').set('Authorization', `Bearer ${token}`).query({ userId: 11233444 });
        expect(response.status).toBe(400);
    });

    it('[DELETE] Deverá retornar 200 caso o usuário seja removido com sucesso', async () => {
        const response = await Test.delete('/users').set('Authorization', `Bearer ${token}`).query({ userId: userId });
        expect(response.status).toBe(200);
    });
});

describe('Rotas /stores', () => {

});

describe('Rotas /parts', () => {

    it('[POST] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.get('/parts').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });

    it('[POST] Deverá retornar 400 caso ocorra algum erro no cadastro da peça', async () => {
        const response = await Test.post('/parts').set('Authorization', `Bearer ${token}`).send({ partName: 'Peça Teste', partBrand: 'Marca Teste', partModel: 'Modelo Teste' });
        expect(response.status).toBe(400);
    });

    it('[POST] Deverá retornar 201 caso a peça seja criada com sucesso', async () => {
        const response = await Test.post('/parts').set('Authorization', `Bearer ${token}`).send({ partName: 'Peça Teste', partBrand: 'Marca Teste', partModel: 'Modelo Teste', partPrice: '88.88' });
        expect(response.status).toBe(201);
    });

    it('[GET] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.get('/parts').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });

    it('[GET] Deverá retornar 200 caso localize as peças cadastradas', async () => {
        const response = await Test.get('/parts').set('Authorization', `Bearer ${token}`);
        partId = response.body.parts[0].part_id;
        expect(response.status).toBe(200);
    });

    it('[PUT] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.put('/parts').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });
    
    it('[PUT] Deverá retornar 400 caso ocorra algum erro ao alterar preço da peça', async () => {
        const response = await Test.put('/parts').set('Authorization', `Bearer ${token}`).query({ partPrice: '12345678' });
        expect(response.status).toBe(400);
    });

    it('[PUT] Deverá retornar 200 caso o preço da peça seja alterado com sucesso', async () => {
        const response = await Test.put('/parts').set('Authorization', `Bearer ${token}`).query({ partPrice: '9.99', partId: partId });
        expect(response.status).toBe(200);
    });

    it('[DELETE] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.delete('/parts').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });

    it('[DELETE] Deverá retornar 400 quando ocorrer algum error ao remomer a peça', async () => {
        const response = await Test.delete('/parts').set('Authorization', `Bearer ${token}`).query({ partIdId: 11233444 });
        expect(response.status).toBe(400);
    });

    it('[DELETE] Deverá retornar 200 caso a peça seja deletada com sucesso', async () => {
        const response = await Test.delete('/parts').set('Authorization', `Bearer ${token}`).query({ partId: partId });
        expect(response.status).toBe(200);
    });

    


});

describe('Rotas /cars', () => {
    
    it('[POST] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.post('/cars').set('Authorization', `Bearer 123`).send({ carName: 'carro teste', carBrand: 'marca teste', carModel: 'modelo teste', carPlate: 'teste12', carChassi: '123456', carPrice: '773.000' });
        expect(response.status).toBe(401);
    });

    it('[POST] Deverá retornar 400 caso dê erro', async () => {
        const response = await Test.post('/cars').set('Authorization', `Bearer ${token}`).send({ carName: 'carro teste', carBrand: 'marca teste', carModel: 'modelo teste', carPlate: 'teste12455', carChassi: '123456', carPrice: '773.000' });
        expect(response.status).toBe(400);
    });

    it('[POST] Deverá retornar 201 caso o carro seja criado com sucesso', async () => {
        const response = await Test.post('/cars').set('Authorization', `Bearer ${token}`).send({ carName: 'carro teste', carBrand: 'marca teste', carModel: 'modelo teste', carPlate: 'teste12', carChassi: '123456', carPrice: '773.000' });
        expect(response.status).toBe(201);
    });

    it('[GET] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.get('/cars').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });
    
    it('[GET] Deverá retornar 200 caso localize os carros cadastrados', async () => {
        const response = await Test.get('/cars').set('Authorization', `Bearer ${token}`);
        carId = response.body.cars[0].car_id;
        expect(response.status).toBe(200);
    });

    it('[PUT] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.put('/cars').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });

    it('[PUT] Deverá retornar 400 caso ocorra algum erro ao alterar preço do carro', async () => {
        const response = await Test.put('/cars').set('Authorization', `Bearer ${token}`).query({ carPrice: '12345678'});
        expect(response.status).toBe(400);
    });
    
    it('[PUT] Deverá retornar 200 caso o preço seja alterado com sucesso', async () => {
        const response = await Test.put('/cars').set('Authorization', `Bearer ${token}`).query({ carPrice: '200.000', carId: carId });
        expect(response.status).toBe(200);
    });

    it('[DELETE] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.delete('/cars').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });

    it('[DELETE] Deverá retornar 400 quando ocorrer algum erro ao remover um carro', async () => {
        const response = await Test.delete('/cars').set('Authorization', `Bearer ${token}`).query({ carId: 11233444 });
        expect(response.status).toBe(400);
    });

    it('[DELETE] Deverá retornar 200 caso o carro seja removido com sucesso', async () => {
        const response = await Test.delete('/cars').set('Authorization', `Bearer ${token}`).query({ carId: carId });
        expect(response.status).toBe(200);
    });

});