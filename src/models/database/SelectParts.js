import { Database } from '../../database/index.js';

export const SelectParts = async () => {

    const query = 'SELECT * FROM parts';
    const params = [];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, errorMessage: "nenhuma peca cadastrada" };
    }

    return { status: true, data: responseDatabase?.results };

};