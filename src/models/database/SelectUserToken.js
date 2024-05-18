import { Database } from '../../database/index.js';

export const SelectUserToken = async ({ token }) => {
    
    const query = 'SELECT * FROM tokens WHERE token = ? AND date <= NOW() - INTERVAL 1 HOUR';
    const params = [token];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, errorMessage: "token não é valido" };
    }

    return { status: true, data: responseDatabase?.results[0] };
};