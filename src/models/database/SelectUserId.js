import { Database } from '../../database/index.js';

export const SelectUserId = async ({ userId }) => {

    const query = 'SELECT * FROM users WHERE user_id = ?';
    const params = [userId];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, errorMessage: "usuário não cadastrado" };
    }

    return { status: true, data: responseDatabase?.results[0] };

};