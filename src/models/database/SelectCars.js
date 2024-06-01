import { Database } from '../../database/index.js';

export const SelectCars = async() => {

    const query = 'SELECT * FROM cars';
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