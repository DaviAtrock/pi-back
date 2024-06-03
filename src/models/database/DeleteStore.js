import 'dotenv/config';
import { Database } from '../../database/index.js';

export const DeleteStore = async ({ storeId }) => {

    let query = 'SELECT * FROM stores WHERE store_id = ?';
    let params = [storeId];

    let responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    if(responseDatabase.results.length === 0){
        return { status: false, errorMessage: "loja nao encontrada" };
    }

    query = 'DELETE FROM stores WHERE store_id = ?';
    params = [storeId];

    responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true };
    
};