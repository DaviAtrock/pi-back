import { Database } from '../../database/index.js';

export const SelectUsers = async () => {

    const query = 'SELECT user_id, user_name, user_email FROM users ORDER BY id DESC';
    const params = [];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, errorMessage: "nenhum usuário cadastrado" };
    }

    return { status: true, data: responseDatabase?.results };
};