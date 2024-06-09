import { Test } from '../jest.setup';

let token;
let userId;

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

    
});

describe('Rotas /cars', () => {

    
});