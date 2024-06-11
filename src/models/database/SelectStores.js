import { Database } from '../../database/index.js';

export const SelectStores = async () => {

    const query = 'SELECT store_id, store_name, store_address, store_cnpj FROM stores ORDER BY id DESC';
    const params = [];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, errorMessage: "nenhuma loja cadastrada" };
    }

    return { status: true, data: responseDatabase?.results };
};