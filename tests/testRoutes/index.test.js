import { Test } from '../jest.setup';

let token;
let userId;
let partId;

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

    it('[GET] Deverá retornar 200 caso localize os usuários cadastrados', async () => {
        const response = await Test.get('/users').set('Authorization', `Bearer ${token}`);
        userId = response.body.users[0].user_id;
        expect(response.status).toBe(200);
    });

    it('[GET] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.get('/users').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });

    it('[PUT] Deverá retornar 200 caso a senha do usuário seja alterada com sucesso', async () => {
        const response = await Test.put('/users').set('Authorization', `Bearer ${token}`).query({ userPass: '123456', userConfirmPass: '123456' });
        expect(response.status).toBe(200);
    });

    it('[PUT] Deverá retornar 400 caso ocorra algum erro ao alterar senha do usuário', async () => {
        const response = await Test.put('/users').set('Authorization', `Bearer ${token}`).query({ userPass: '12345678', userConfirmPass: '123456' });
        expect(response.status).toBe(400);
    });

    it('[PUT] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.put('/users').set('Authorization', `Bearer 12346`);
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

    it('[DELETE] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.delete('/users').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
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
        const response = await Test.post('/parts').send({ partName: 'Peça Teste', partBrand: 'Marca Teste', partModel: 'Modelo Teste' });
        expect(response.status).toBe(400);
    });

    it('[POST] Deverá retornar 201 caso a peça seja criada com sucesso', async () => {
        const response = await Test.post('/parts').send({ partName: 'Peça Teste', partBrand: 'Marca Teste', partModel: 'Modelo Teste', partPrice: '88.88' });
        expect(response.status).toBe(201);
    });

    it('[GET] Deverá retornar 401 caso o token seja inválido ou não seja enviado', async () => {
        const response = await Test.get('/parts').set('Authorization', `Bearer 12346`);
        expect(response.status).toBe(401);
    });

    it('[GET] Deverá retornar 200 caso localize as peças cadastradas', async () => {
        const response = await Test.get('/parts').set('Authorization', `Bearer ${token}`);
        partId = response.body.users[0].part_id;
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


});